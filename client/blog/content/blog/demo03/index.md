---
slug: design-pattern
date: 2019-05-07
title: 'Design pattern'
description: 'Generator function in javascript, What is it, Working mechanism, Why we need it ? Multiple use cases'
published: true
# banner: './images/banner.png'
---

# Design Patterns

There’s been a ton of articles on design patterns. This article emphasis more on why should we use it first of all in programming.

![some-wallpattern](https://wallpaperaccess.com/full/556000.jpg)

## What is design pattern ? 
There is a lot of ways to write code for a single solution. But some ways has been used by many developers and they iterated it over a period and optimized in a best possible way so that the code is reusable and easy to use. The each proven way of writing code is called a design pattern.

### Why to use design pattern ? ( Advantages )

Some programming patterns expresses the intent of the block of code in a better or simple manner.

1.  When developers in the same codebase starts using design pattern it helps the team to understand effortlessly what the code trying to express irrespective of who written it. The communication between the developers will be seamless if the developers becomes familiar with design patterns while solving a problem.
2.  While writing code by keeping design patterns in mind we more likely to write optimized code. This prevents us from refactoring the code.

### How it makes the code more readable and reusable
----------------------------------------------------

There is design pattern called **Iterator design pattern**. Most of them are using it without realizing it. Because it is widely adopted by developers.

### Without iterator pattern

The below Programs Motive is _Adding tax for all the items_ _cost_
```js
var items = [
  {"name":"table", "price":"12.00"},
  {"name":"chair", "price":"8.00"},
  {"name":"stool", "price":"6.00"},
]

function addTax(items, taxRate){
  for(var i = 0; i < items.length;i++){
     items[i].price = items[i].price + ( items[i].price * (taxRate * 0.01) )
  }
}

addTax(items, 14);
```

In the above code we iterated through all the items by a new variable **_i_**. For the iteration  to work fine we need to take care two things in the **_addTax_** function’s **_for loop_**.

1.  **Increment** - Ensure **_i_** is incremented after performing operation on each item. **( i++)**
2.  **Condition** - Ensure the iteration is not infinite by limiting to total items. **( i < items.length )**

This kind of coding pattern we very often encounter. Is there anything we can do to make it better. Let’s discuss.

The **addTax** function focuses more on **How to do** rather than **What to do.** The function motive is to just add the tax for all items present. But the code also focuses more on picking items one by one.

Let’s create a iterator which emphasis on **What to do** and eliminates most of the **How to do** (Increment and Condition) part.

#### With Iterator Pattern

```js
var Iterator = function(items) {
    this.index = 0;
    this.items = items;
}
 
Iterator.prototype = {
    first: function() {
        this.reset();
        return this.next();
    },
    next: function() {
        return this.items[this.index++];
    },
    hasNext: function() {
        return this.index <= this.items.length;
    },
    reset: function() {
        this.index = 0;
    },
    each: function(callback) {
        for (var item = this.first(); this.hasNext(); item = this.next()) {
            callback(item);
        }
    }
}


var items = [
  {"name":"table", "price":"12.00"},
  {"name":"chair", "price":"8.00"},
  {"name":"stool", "price":"6.00"},
]

function addTax(items, taxRate){
  items.each(function(item){
    item.price = items.price + ( item.price * (taxRate * 0.01) )
  })
}

var iterableItems = new Iterator(items);
addTax(iterableItems, 14);
```

The above code eliminated the **How to do** part by introducing a new Iterator class.

The above iterator design pattern was one of the highly used design pattern in javacript. Then later **ecmascript ( javascript )** officially adopted this pattern in it’s language for Arrays during it’s 2015 documentation ( **ES6** ). After ES6 we don’t need the **_Iterator class_** at all. The Array Object comes with a **forEach** iterator.

```js
var items = [
  {"name":"table", "price":"12.00"},
  {"name":"chair", "price":"8.00"},
  {"name":"stool", "price":"6.00"},
]

function addTax(items, taxRate){
  items.forEach(item => { item.price = item.price + ( item.price * (taxRate * 0.01) ) })
}

addTax(items, 14);

```

I guess the walk through helps us to understand How design patterns emerges and why we should use design pattern.
