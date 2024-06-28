---
title: Overview of Dart Basics
date: 2022-03-02 00:00:00
img: /blogs/competitive-programming.jpg
img_alt: "Overview of Dart Basics"
excerpt: Dart একটি open-source, general-purpose প্রোগ্রামিং ভাষা, যা ডিজাইন করা হয়েছে Client সাইট অ্যাপলিকেশন ডেভলপমেন্টের জন্য
tags:
    - DART
    - OOP
    - Client
draft: false
---

# **Overview of Dart Basics**

Dart একটি open-source, general-purpose প্রোগ্রামিং ভাষা, যা ডিজাইন করা হয়েছে Client সাইট অ্যাপলিকেশন ডেভলপমেন্টের জন্য । 2011 সালে Google দ্বারা তৈরি করা হয়েছিল এবং পরে ECMA দ্বারা Standardization করা হয়৷ তবে এটি দিয়ে Server এবং Desktop অ্যপলিকেশনও তৈরি করা যায়। Dart একটি C-style, object-oriented, class-based, garbage-collected প্রোগ্রামিং ভাষা। এটি আরও Supports করে Interfaces, mixins, abstract classes, reified generics এবং type inference।

প্রথমে Dart JavaScript এর বিকল্প হিসাবে Browser এ Drat VM দ্বারা অ্যাপগুলি চালানোর উদেশ্যে এসেছিল। কিন্তু এটি Web Development Community দ্বারা কখনই গ্রহণ করা হয়নি৷ যাইহোক, এটি Flutter framework দ্বারা গৃহীত হওয়ার পরে একটি বড় উপায়ে ফিরে এসেছে। তবে আজ এটি বিশ্বের সবচেয়ে জনপ্রিয় প্রোগ্রামিং ভাষাগুলির মধ্যে একটি।

## **Dart এর অনন্য ক্ষমতা**

Dart এর অনন্য ক্ষমতা হলো এটি একাধিক ডিভাইসে কম্পাইল হতে পারে। এটি মোবাইল ডিভাইসের জন্য "ARM" এবং "x64" মেশিন কোড তেরি করতে পারে। dart2js কম্পাইলার দ্বারা Web Browsers এর জন্য Dart কোডকে সমতুল্য JavaScript কোডে Transpile করতে পারে। আরও Windows, macOS, and Linux এর জন্য স্বয়ংসম্পূর্ণ executables এ Dart কম্পাইল হতে পারে। Dart এর আরো একটি ফিচার হলো এর Just In Time (JIT) কম্পাইলার। যার মাধ্যমে Source কোডকে মুহুতের মধ্যেই ‌মেশিন কোডে কম্পাইল করে যায়, যার ফলে Developer রা পায় Hot Reload এর মত ফিচার। যা Developer দের Productivity বাড়িয়ে দেয়।

সমস্ত Dart কোড একটি Isolate এর ভিতরে চলে, যা একটি Single-threaded event loop। যা কিনা সম্ভব করে Asynchronous background work একটি thread এর মাধ্যমেই। কিন্তু আপনি Parallel ভাবে কোড চালানোর জন্য একাধিক Isolate তৈরি করতে পারেন।

## **Dart কোড Exemples**

### **Type-safe Dart**

Dart একটি type-safe ভাষা। যার মানে হলো, যে একটি ভেরিয়েবলের মান সর্বদা তার Static টাইপের সাথে মেলে এবং এটি সাধারণত Production এর আপনার অ্যাপের জন্য কম runtime errors এর কারণ হয়।

```dart

String hello = "Hi Tecognize"; // Explicit Type

var num = 35; // Inferred Type

num = "something"; // error

```

কোডের প্রথম লাইনে, একটি String টাইপের ভ্যারিয়েবল Explicitly নির্ধারণ করে দিয়েছি। কিন্তু দ্বিতীয় লাইনে, var কিওয়ার্ডের মাধ্যমেও টাইপ Inferred ব্যবহার করেও আমরা একই কাজ করলাম। এগুলোকে বলা হয় Static ভ্যারিয়েবল। যার টাইপ পরবর্তীতে আর পরিবর্তন করতে পারবো না। এখানে তৃতীয় লাইনে, String টাইপের ডেটা num এর store করছি যা কিনা সম্ভব নয়। কারন num একটি Integer টাইপের Static ভ্যারিয়েবল এখানে আমরা Error খাবো।

### **Dynamic** **টাইপিং**

Dart এর টাইপ সিস্টেমটি flexible ও। যা আপনাকে যখন প্রয়োজন হয় তখন dynamic types এবং runtime checks ব্যবহার করতে দেয়।

```dart

dynamic anything = "Tecognize Training"; // Flexible Type

anything = 234;

```

কোডের প্রথম লাইনে, আমরা একটি dynamic টাইপের ভ্যারিয়েবল তৈরি করেছি। এই ভ্যরিয়েবলে আমরা যে কোন টাইপের ডেটা store করতে পারবো। দ্বিতীয় লাইনে, আমরা সেটিই করলাম anything ভ্যারিয়েবলে Integer ডাটা store করলাম।

### **Null safety**

Dart null safety প্রদান করে। যার অর্থ হল ভ্যারিয়েবলের মানগুলি null হতে পারে না, যদি না আপনি স্পষ্টভাবে তাদের অনুমতি না দেন। যা runtime exceptions কে আরও কমিয়ে দিতে পারে।

```dart

int year; // error: null safety, value can't be null

int? year;

```

কোডের প্রথম লাইনে, ভ্যারিয়েবল তৈরি করেছি কিন্তু কোন Value দেইনি। যা Dart এ বৈধ নয়, এখানে Error ঘটবে। নাল ভ্যারিয়েবল তৈরি করতে হলে, দ্বিতীয় লাইনের মতো Syntax এ লিখতে হবে।

### **Multiple programming paradigms**

Syntactically, এটি Java, Javascript এবং Swift এর elements গুলির সমন্বয়েই তৈরি।

```dart

void main() {

  var name = "Shihab Mahamud";

  String name2 = "Shihab Mahamud";

  var name3 = null; // not object

}

```

একটি Dart প্রোগ্রাম সর্বদা main ফাংশন দিয়ে শুরু হয় যার কোন রিটার্ন value নেই তাই এটি void type দেওয়া থাকে। এর ভিতরে আমরা "var" দিয়ে একটি ভেরিয়েবল declare করতে পারি এবং এটিতে একটি string value দিতে পারি। যা dart স্বয়ংক্রিয়ভাবে একটি string টাইপ হিসাবে অনুমান করবে। যাইহোক, আমরা আরও "var" সরিয়ে স্পষ্টভাবে টাইপ বলে দিতে পারি। আপনি ভেরিয়েবলে যা store করেন তার সবকিছুই একটি object এবং প্রতিটি object ই একটি class এর instance, একমাত্র জিনিস যা dart এ object নয় তা হল "null"। যা কিনা একাধিক প্রোগ্রামিং paradigms এর দরজা খুলে দেয়।

```dart

programmingInDart(Function func) {

  func();

}

programmingInDart(() => print("Functional programming with dart!!"));

```

ফাংশনগুলিও first-class objects যার মানে functional programming এর জন্য ফাংশনগুলো বিভিন্ন জায়গায় pass করা যাবে।

```dart

class Human {}

mixin good {}

mixin bad {}



class Man extends Human with good, bad {}

```

অথবা আপনি object-oriented patterns জন্য mixin-based inheritance সহ class তৈরি করতে পারেন।

Dart প্রোগ্রামিং ভাষায় pub নামে একটি package manager রয়েছে যা আপনাকে আপনার কাজগুলি করতে সাহায্য করার জন্য হাজার হাজার open source packages সরবরাহ করে।‌
