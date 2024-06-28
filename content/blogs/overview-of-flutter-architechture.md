---
title: Overview of Flutter Architecture
date: 2022-03-05 00:00:00
img: /blogs/overview-of-flutter-architechture.jpg
img_alt: Overview of Flutter Architecture
excerpt: Flutter হলো Google এর তৈরি cross-platform UI toolkit যা একই কোডকে বিভিন্ন operating systems যেমন iOS এবং Android এ ব্যবহারের সুযোগ দেয়।
tags:
    - DART
    - Flutter
    - CROSS-PLATFORM
draft: false
---

# Overview of Flutter Architecture

Flutter হলো Google এর তৈরি cross-platform UI toolkit যা একই কোডকে বিভিন্ন operating systems যেমন iOS এবং Android এ ব্যবহারের সুযোগ দেয়। এছাড়াও অ্যাপ্লিকেশনগুলিকে built-in platform services এর সাথে সরাসরি ইন্টারফেস করার অনুমতি দেয়। যার ফলে অ্যাপ্লিকেশনগুলো হয় Native এবং high-performance অ্যাপ্লিকেশন। এটি সম্ভব করে একই Codebase থেকে multiple platform এর জন্য Native অ্যাপ্লিকেশন তৈরি করতে, যা অ্যাপ্লিকেশন Development এর cost এবং সময় কমিয়ে দেয়। এই ব্লগে আমরা Flutter architecture এর high-level Overview দেওয়ার চেষ্টা করবো।

Flutter অ্যাপ্লিকেশন development এর সময় অ্যাপ্লিকেশটি VM এর রান হয়, যা কোড changes এ পুরো কোড recompile না করেই stateful hot reload কে সম্ভব করে। কিন্তু release এর সময় সরাসরি machine code এ compile হয়। হোক সেটা Intel x64 অথবা ARM instructions বা ওয়েবের জন্য JavaScript এ। এটি যে open-source এটা বলার তো কোন প্রয়োজন নেই, যাই হোক যেহেতু এটি open-source তাই third-party packages এর কোন অভাব হবে না।‌

# Architectural layers

Flutter একটি extensible, layered system হিসাবে ডিজাইন করা হয়েছে। এটি independent লাইব্রেরিগুলির একটি series হিসাবে বিদ্যমান যা প্রতিটি underlying layer এর উপর নির্ভর করে।

Flutter মূলত তিনটি layers এর উপর তৈরি।

-   Framework (Dart)
-   Engine (C/C++)
-   Embedder (Platform-specific)

## Embedder

Underlying operating system, Flutter অ্যাপ্লিকেশনগুলি অন্যান্য native অ্যাপ্লিকেশনগুলির মতো একইভাবে প্যাকেজ করা হয়। একটি platform-specific embedder একটি entry point প্রদান করে; rendering surfaces, accessibility, and input এর মতো services গুলিতে access জন্য underlying operating system এর সাথে সমন্বয় করে এবং message event loop পরিচালনা করে। Embedder টি এমন একটি প্রোগ্রামিং ভাষায় লেখা হয়েছে যা প্ল্যাটফর্মের জন্য উপযুক্ত: বর্তমানে Android এর জন্য Java এবং C++, iOS এবং macOS-এর জন্য Objective-C/Objective-C++ এবং Windows এবং Linux-এর জন্য C++। Embedder ব্যবহার করে, Flutter কোড একটি মডিউল হিসাবে একটি বিদ্যমান অ্যাপ্লিকেশনে যুক্ত করা যেতে পারে, অথবা এটি অ্যাপ্লিকেশন হিসেবে run করা যেতে পারে।

আমরা চাইলে নিজেও Embedder তৈরি করে Flutter অ্যাপ্লিকেশন যেখানে সেখানে run করাতে পারি।

## Engine

Flutter মূল অংশে রয়েছে Flutter engine, যা বেশিরভাগই C++ এ লেখা এবং সমস্ত Flutter অ্যাপ্লিকেশন supports করার জন্য প্রয়োজনীয় primitives প্রদান করে। যখনই একটি নতুন frame paint করার প্রয়োজন হয় তখনই rasterizing composited scenes এর মাধ্যমে engine এই কাজটি করে থাকে৷ এটি graphics (through Skia), text layout, file, and network I/O, accessibility support, plugin architecture, and a Dart runtime and compiler toolchain সহ Flutter এর core API-এর low-level implementation প্রদান করে।

Engine টি dart:ui-এর মাধ্যমে Flutter ফ্রেমওয়ার্কের সংস্পর্শে আসে, যা Dart classes এর মাধ্যমে C++ কোডেকে আড়াল করে। এই লাইব্রেরিটি lowest-level primitives বিষয়গুলিকে প্রকাশ করে, যেমন driving input, graphics, এবং text rendering subsystems।

## Framework

সাধারণত, developer রা Flutter Framework এর মাধ্যমেই Flutter সাথে যোগাযোগ করে, যা Dart ভাষায় লেখা একটি modern, reactive framework প্রদান করে। এটি layer গুলির একটি সিরিজের সমন্বয়ে গঠিত platform, layout, and foundational libraries একটি সমৃদ্ধ সেট অন্তর্ভুক্ত করে। যথা:

-   Basic foundational classes, এবং building block services যেমন animation, painting, and gestures যা underlying foundation এর উপর সাধারণত ব্যবহৃত abstraction প্রদান করে।
-   Rendering layer layout নিয়ে কাজ করার জন্য একটি abstraction প্রদান করে।
-   widgets layer একটি composition abstraction. rendering layer এর প্রতিটি রেন্ডার অবজেক্টের widgets লেয়ারে একটি সংশ্লিষ্ট class থাকে।
-   Material এবং Cupertino লাইব্রেরিগুলি নিয়ন্ত্রণের ব্যাপক সেট অফার করে যা Material বা iOS ডিজাইন ভাষাগুলি বাস্তবায়নের জন্য widget স্তর implement এ primitives composition ব্যবহার করে।

Flutter framework তুলনামূলকভাবে ছোট; অনেক higher-level বৈশিষ্ট্য যা developer রা ব্যবহার করতে পারে plugins হিসাবে যুক্ত করা হয়, যার মধ্যে রয়েছে camera and webview-এর মতো platform-agnostic features, সেইসাথে characters, http, এবং animation এর মতো platform plugins বৈশিষ্ট্য যা core Dart and Flutter librarie এর উপর তৈরি। এই প্যাকেজগুলি কিছু broader ecosystem থেকে আসে, যা in-app payments,Apple authentication এবং animations মতো services গুলি কভার করে৷

এটাই ছিল Flutter Architecture এর একটা Overview। এখানে আমরা দেখতে পাচ্ছি Flutter মুলত তিনটি Layers এর মাধ্যমে তৈরি। যা কি না এতটাই Flexible যে আমরা যেকোন Layers কে বাদ দিয়ে নিজেদের মতো একটা তৈরি করতে পারি। যার আমরাকে সুযোগ করে দেয় যে কোন Device এর জন্য Application তৈরি করার।
