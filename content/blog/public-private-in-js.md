---
title: 'Implementing public, private, protected, and static properties and members in Javascript'
date: '2019-01-06'
authorName: 'Naman Kumar'
slug: '/blog/public-private-protected-static-in-javascript'
authorImg: '../about/me.jpg'
featuredImg: '../images/javascript.png'
tags:
  - javascript
  - oops
  - es5
show: 'true'
---

Today many of you might be saying Javascript is not a very object oriented programming language and that
it lacks the ability of data hiding. But for a language as evolving as Javascript, there are always new features
being introduced.

The **classes** came to Javascript with the introduction of **ESMAScript 2015**. It doesn't introduce any new OOP inheritance
model in Javascript but was a plain syntax sugar over already existing prototypal inheritance. Even a bunch of new
features around classes are in the pipeline _(as at the time of writing this post)_, including **_class field declarations_**
and **_private fields_**, which are at stage 3 under the [class-fields proposal](https://github.com/tc39/proposal-class-fields).

Again, that will only introduce just a new syntax sugar in the language. In this post we will learn how the classes
actually work under the hood and how we can implement _public_, _private_, _protected_, and _static_ properties and
methods in Javascript.

<editor>
function foo (){
  console.log('naman');
}

foo();
</editor>
