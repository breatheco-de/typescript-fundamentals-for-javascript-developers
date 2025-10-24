---
readingTime:
  minutes: 1.916
  words: 479
fkglResult: 12.38
---

# `02.3` Managing States with Literal Types

In the previous lesson, we learned what literal types are and how to define them. Now, let's take this a step further by applying them in conditional logic to handle different states of an application.

## Applying Literal Types in Conditional Logic

Literal types are not only useful for restricting values, but they are also very helpful for building logic in your code. By defining specific states, you can use conditional structures like `if` or `switch` to execute different actions depending on the state. This is common in applications where you need to handle flows based on predefined options, such as the status of an order, a user, or a task.

## Instructions

1. Define a literal type called `MessageState` with the values `"sent"`, `"read"`, and `"deleted"`.
2. Create an interface `Message` with the properties `id` (number), `content` (string), and `state` (of type `MessageState`).
3. Write a function `getStateDescription` that receives a parameter of type `MessageState` and returns a string describing the state (for example, if the state is `"sent"`, return `"The message has been sent."`).
4. Finally, create an object of type `Message` and use the function to display the description of its state in the console.

See you in the next lesson, where we will review everything we've learned about Union Types and Literal Types! Keep practicing and celebrating your progress.