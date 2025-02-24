---
title: ইনভার্শন অব কন্ট্রোল নীতি
description: এই ব্লগে আমি জাভা ওয়েব প্রোগ্রামিং এবং ইনভার্শন অব কন্ট্রোল ও ডিপেন্ডেন্সি ইনজেকশনের বিষয়ে আলোচনা করতে চলেছি।
date: 11 October 2022
tags: ["java", "oop", "programming"]
featured: false
published: true
---

সবাইকে সাগতম আমার নতুন ব্লগে। সম্প্রতি আমি একটি বই পড়ি আ ন ম বজলুর রহমান স্যারের। যার নাম [জাভা ওয়েব প্রোগ্রামিং](https://bazlur.com/posts/2020-03-06-%E0%A6%9C%E0%A6%BE%E0%A6%AD%E0%A6%BE-%E0%A6%93%E0%A6%AF%E0%A6%BC%E0%A7%87%E0%A6%AC-%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A7%8B%E0%A6%97%E0%A7%8D%E0%A6%B0%E0%A6%BE%E0%A6%AE%E0%A6%BF/)।

## বইয়ের বিষয়বস্তু

এখানে জাভার একদম মৌলিক কম্পোনেন্ট (যেমন: Servlet, JSP, JDBC, ইত্যাদি) দিয়ে সার্ভার সাইট জাভা ওয়েব অ্যাপ্লিকেশন তৈরির ব্যপারে আলোচনা করা হয়েছে। এখানেই শেষের একটি আধ্যয়ে আলোচনা করা ছিল ইনভার্শন অব কন্ট্রোল ও ডিপেনডেন্সি ইনজেকশন নিয়ে।

> আমার কাছে মনে হয়েছে এই বইটি আমাকে ইনভার্শন অব কন্ট্রোল ও ডিপেনডেন্সি ইনজেকশনের গুরুত্বটা নিখুঁতভাবে বোঝাতে পেরেছে।

## উদাহরণ: UserService ক্লাস

এখন ধরুন আমাদের একটি ক্লাস আছে UserService নামে যার কাজ হলো ইউজার রিলেটেড বিভিন্ন business লজিক হ্যান্ডেল করা।

```java
public class UserService {
    private final JdbcUserRepository userRepository = new JdbcUserRepository();
    private final MD5PasswordEncryption passwordEncryption = new MD5PasswordEncryption();

    public User saveUser(User user) {
        user.setPassword(passwordEncryption.encrypt(user.getPassword()));
        return userRepository.save(user);
    }
}
```

### ডিপেনডেন্সির ধরন

আমরা জানি ডিপেনডেন্সি দুই ধরনের হয়:

1. **স্টংলি কাপলড ডিপেনডেন্সি** (Strongly coupled dependency)
2. **লুজলি কাপলড ডিপেনডেন্সি** (Loosely coupled dependency)

## লুজলি কাপলড ডিপেনডেন্সি

এখন এর সমাধান হলো এই দুইটি ক্লাসকে লুজলি কাপলড ডিপেনডেন্সি হিসেবে পরিবর্তন করা।

### UserRepository ইন্টারফেস

```java
public interface UserRepository {
    User save(User user);
}

public class JdbcUserRepository implements UserRepository {
    @Override
    public User save(User user) {
        // store user in database
        return user;
    }
}

public class RemoteUserRepository implements UserRepository{
    @Override
    public User save(User user) {
        // send user in other server
        return user;
    }
}
```

### PasswordEncryption ইন্টারফেস

```java
public interface PasswordEncryption {
    String encrypt(String password);
}

public class MD5PasswordEncryption implements PasswordEncryption {
    @Override
    public String encrypt(String password) {
        // implement password encryption using MD5
        return password;
    }
}

public class Sha256PasswordEncryption implements PasswordEncryption{
    @Override
    public String encrypt(String password) {
        // implement password encryption using SHA 256
        return password;
    }
}
```

## পরিবর্তিত UserService ক্লাস

```java
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncryption passwordEncryption;

    public UserService(UserRepository userRepository, PasswordEncryption passwordEncryption) {
        this.userRepository = userRepository;
        this.passwordEncryption = passwordEncryption;
    }

    public User saveUser(User user) {
        user.setPassword(passwordEncryption.encrypt(user.getPassword()));
        return userRepository.save(user);
    }
}
```

## ইনভার্শন অব কন্ট্রোল

এখন UserService-কে একটু পরিবর্তন করে UserRepository এবং PasswordEncryption ইন্টারফেসের অবজেক্টে UserService-এর কনস্ট্রাক্টর এর মাধ্যেমে নিয়ে কাজ করবো।

```java
UserService userService = new UserService(
    new JdbcUserRepository(),
    new MD5PasswordEncryption()
);
```

এখন যদি আমাদের Sha256PasswordEncryption প্রয়োজন হয়:

```java
UserService userService = new UserService(
    new JdbcUserRepository(),
    new Sha256PasswordEncryption()
);
```

> তাহলে এখানে ডিপেনডেন্সি সরবরাহ করার কন্ট্রোলটি ইনভার্ট হয়েছে। UserService-কে নিজে থেকে ডিপেনডেন্সি তৈরি করতে হচ্ছে না। বরং এটি অন্য কেউ করছে। একেই বলা হয় ইনভার্শন অব কন্ট্রোল (Inversion of Control)।

## উপসংহার

এটি একটি সফটওয়্যার ইঞ্জিনিয়ারিং নীতি (software engineering principle) যার ব্যবহার ব্যপক। প্রায় সমস্ত সফটওয়্যার framework এটি ব্যবহার করেই (যেমন: Spring, .NET, Laravel, Django, Rails এত্যাদি)।

এটিই ছিল ইনভার্শন অব কন্ট্রোল নিয়ে আমার আলোচনা। অন্য কোন ব্লগে এর পরবর্তীতে বিষয় ডিপেনডেন্সি ইনজেকশন নিয়ে আলোচনা করা হবে।

সবাই করে ধন্যবাদ, খোদা হাফেজ।
