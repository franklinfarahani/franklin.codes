---
title: Understanding the useEffect Hook Mindset
date: "2019-07-06"
description: The trick to understanding useEffect is to figure out what your side effect should be "synced" with, rather than "when" it is happening.
tags: ["Hooks", "React"]
cover: "./useeffect-hook.jpg"
---

## Introduction

React Hooks feel like magic to React users who are used to the classic lifecycle methods. They provide some niceties that are really appreciated, such as allowing you to share and reuse complex logic, making writing components more intuitive, and shortening the overall amount of code you need to write to achieve similar effects. However, just like the lifecycle methods [of old!], hooks have their own intricacies and gotchas that need to be understood. Here I discuss the `useEffect` hook and try to explain it in a way that can help you navigate the general challenges you might face.

## The syntax

```ts
useEffect(effect, dependencies)
// accepts an effect and an optional dependency list
```

The `useEffect` hook's purpose is to deal with all of the side effects of your React component. In React terms, this refers to any changes that need to happen **besides** the general return value presentation of the component. Some examples of side effects are network calls, logging, or manually changing the DOM.

It is also the equivalent of the old lifecycle hooks `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` combined.

As you might know, sharing similar logic between lifecycle methods is a very common occurrence in the React component ecosystem. Let's take a look at an example taken from the 
[official docs](https://reactjs.org/docs/hooks-effect.html#example-using-classes).

```js {9-15}
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    document.title = `You clicked ${this.state.count} times`;
  }

  componentDidUpdate() {
    document.title = `You clicked ${this.state.count} times`;
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}
```

This is practically the same code, because in this particular case we don't care about **when** the effect should occur, but rather that it occurs for *every* render of our component.

Let's look at the same component, this time using `useEffect`:

```js {1, 6-8}
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

Here `useEffect` is doing precisely what we intended in the first place, which is doing *something* after every render **including the first one**.

## The Dependency List

What if we wanted to run the effect exactly once, similar to `componentDidMount`? Let's say we have a fade-in animation for a component and we only want the animation to play when the component first mounts. What if we wanted it to play every time the component comes into view? How do we go about doing that?

That's when the second argument of `useEffect` comes in. The **dependency list** tells `useEffect` what changes or triggers we want to attach our effect to. Let's look at our second case, meaning every time the components comes into view:

```js {6}
useEffect(() => {
  // assuming 'isInView' is the state variable 
  // that denotes whether the component is in view
  // ...
  // fadeIn() effect
}, [isInView])
```

This is telling `useEffect` to play our effect after every re-render that involves `isInView` updating. We can achieve our first case goal (which is playing the animation only once after the first render), by leaving the array empty. This indicates that the effect should not be attached to any changes.

```js {6}
useEffect(() => {
  // assuming 'isInView' is the state variable 
  // that denotes whether the component is in view
  // ...
  // fadeIn() effect
}, [])
```

## Conclusion

The main thing to understand with `useEffect` is that it requires a different mindset to the lifecycle method. Previously, side effects were handled by picking the right lifecycle method that revolved around timing. With `useEffect`, we think about side effects in terms of synchronization to state variables. A great way to neatly summarize this idea comes to you via a tweet by [@ryanflorence](https://twitter.com/ryanflorence):

https://twitter.com/ryanflorence/status/1125041041063665666

Thank you for taking the time to read! Let me know if you have any questions.





