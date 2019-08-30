---
title: 'Implementing public, private, and static data members in pre-ES5 Javascript'
date: '2019-01-10'
authorName: 'Naman Kumar'
slug: '/blog/public-private-static-data-members-in-javascript'
authorImg: './me.jpg'
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
actually work under the hood and how we can implement `public`, `private`, and `static` properties and
methods in Javascript.

## ES5 Classes

Let us take a look at the ES5 classes. Nothing special but just plane class format as in most of the languages.

<editor>
class foo {
  constructor(bar){
    this.bar = bar;
  }
  //
  print() {
    console.log(this.bar);
  }
//
}
//
const baz = new foo('bar');
baz.print();
</editor>

Let us see how we could have implemented this same class before es5 came and learn how the classes works under the hood.
So in the below code you will see implementation of the same `foo` class from above using a function.

<editor>
function foo (bar) {
  // constructor code starts
  this.bar = bar;
  // constructor code ends
  //
  this.print = function () {
    console.log(this.bar);
  };
}
//
const baz = new foo('bar');
baz.print();
</editor>

Try running both of these code snippets above and you'll get the same output. This is how you can achieve writing a
class implementation supporting old browsers, without using es5 classes.

The functional implementation of a class in Javascript is actually more powerful than using es5 classes. ES5 classes
provides nothing like `private` or `static`.

Let's see how we can implement all these class features that are necessary for an object-oriented architecture, in Javascript.

## Public

The data members or member functions of an object are all public. Any other part of the code can modify or delete them.
There are two ways to add public data member and member function in an object. The first way is to create it in the
constructor fucntion.

<editor>
function foo() {
  // inside constructor function
  this.bar = 'initial data';  
}
//
// create a new object using foo as constructor
const baz = new foo();
// bar is a public data member of baz object
console.log(baz.bar);
//
// we can change the value of baz.bar
baz.bar = 'changed data';
console.log(baz.bar);
</editor>

Creating a `public` data member is as easy as that. We use this method of creating public data members through inside
the constructor functions most of the time to initialise data for the new object. The second way to create public data
members is to attach it to the contructor's prototype. This is used to add member functions for inheritance while conserving
memory. Any property which is not available at the object is checked in the prototype chain.

<editor>
// constructor function
function foo(bar) {
  this.bar = bar;
}
// adding a method to constructor function's prototype
foo.prototype.print = function() {
  console.log(this.bar);
}
//
const baz = new foo('bar');
baz.print();
</editor>

## Private

Well this is something new we have to learn. ES5 classes do not provide functionality of `private` data members or
member functions. Data abstraction is a key phenomenon of object oriented programming. But it is not something
you cannot do with Javascript. Let us learn how we can achieve data abstraction with creating `private` data members.

<editor>
// constructor function
function tesla() {
  // private data member
  let battery = 100;
//
// privileged member function
this.drive = function(kms) {
battery -= Math.min(battery, kms/10);
};
//
// privileged member function
this.charge = function(hours) {
battery += Math.min(100 - battery, 20 * hours);
};
//
// privileged member function
this.range = function() {
  console.log('Car can run for '+ battery * 10 + ' kms');
};
};
//
const car = new tesla();
// will give undefined
console.log(car.battery);
//
/* drive, charge, and range have access 
 * to the battery and can modify it. */
car.range();
car.drive(1000);
car.range();
//
car.charge(2);
car.range();
</editor>

Any variable declared inside the constructor functions, also including the constructor's params are private to the scope
of the constructor function. In the above code snippet, `battery` is the private data member of `car` object. `drive`,
`charge`, and `range` are privileged member functions, they have access to the private `battery` property and can change
it. But you cannot do that from outside of the `car` object.

> Try tweaking the code, may be making your car more effecient, well I am happy with the 1000kms
> range. <emoji>:smile:</emoji>

## Static

Now lets learn how we can implement `static` data members in functional classes. The `static` data members belong to the
constructor function rather than the objects. Let us build a simple objects counter.

<editor>
const foo = function() {
  function foo() {
    foo.count++;
    this.roll = foo.count;
  };
//
  foo.count = 0;
  return foo;
}();
//
const bar = new foo();
const baz = new foo();
//
console.log(bar.roll, baz.roll);
</editor>

Though not with es5 but you can implement static data members using the class syntax in es6. In this post we learned how
we can implement `public`, `private`, and `static` data members in Javascript using functional classes.

You can ask your questions or submit feedback in the comments. Also do not forget to try the functional inline code editor
and compiler in this post.

### Thank you!
