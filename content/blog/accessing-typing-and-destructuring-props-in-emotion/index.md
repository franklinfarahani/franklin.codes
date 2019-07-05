---
title: Accessing, Typing, and Destructuring Props in Emotion
date: "2019-06-03"
description: Dynamic component styling is an important benefit of using CSS-in-JS libraries. I go over patterns for using component props, destructuring them (or maybe not!), and giving them types using TypeScript. 
tags: ["Emotion", "TypeScript", "React", "styled-components"]
cover: "./emotion-plus-ts.jpg"
---

# Introduction

To understand where the props (or function arguments) of Emotion components 
go we must first understand why the syntax looks the way it does. Let's look
at an example:

```js
const MyComponent = styled.div`
  background-color: red;
`;
```

This notation is called a 
[Tagged Template Literal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#Tagged_templates)
and it is actually a feature of ES6. Here's what it looks like in its barest 
form:

```js
const myFunction = (...arg) => console.log(...arg);

myFunction`Hello World!`; // ["Hello World"]

// equivalent to:
myFunction(['Hello World']);
```

Now, Let's say we slightly modify `myFunction` to add an interpolation in there.
The equivalent function call will most likely give you a hint as to how Emotion
works under the hood.

```js
const name = 'Franklin';

myFunction`Hello ${name}!`; // ["Hello ", "!"] "Franklin"

// equivalent to:
myFunction(['Hello ', '!'], name);
```

As you can see, the string is broken up and placed into an array while our `name`
variable is passed as an argument. This is essentially how Emotion and other similar 
libraries are able to offer the syntax they have. It is important to note that in the
example above, we passed a variable to our function as an argument, but using template
literals we are also able to pass **functions** as arguments.

## Accessing Props and Destructuring

Let's go back to our original component. In the same way that we were passing
arguments to `myFunction`, we can pass functions to our component as well. 
Emotion will then in turn process, resolve, and turn it into styles.

Here's what that looks like:

```js
const MyComponent = styled.div`
  background-color: ${props => props.color};
`;

// Usage:
<MyComponent color="red" />

```

As you might have noticed, in larger and more complex components it might become
tedious to include `${props => props.someProp}` every time we want to style some
property dynamically. Considering we're only dealing with functions, it is possible
to use the following pattern to somewhat destructure our props:

```js
const MyComponent = styled.div`
  ${({ color }) => `
    background-color: ${color};
  `};
`;
```

However, in my opinion this is less readable than the original syntax considering,
as you can see, we have entered the classic bracket hell. Still, it might make sense
to use this pattern when necessary.

## TypeScript Typing

It might be confusing to figure out how the types need to be included in Emotion
components, but this can be achieved using the syntax below:

```ts
type MyComponentProps = {
  color: string
}

const MyComponent = styled.div<MyComponentProps>`
  background-color: ${props => props.color};
`;

```
