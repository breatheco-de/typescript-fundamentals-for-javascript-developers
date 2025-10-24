---
readingTime:
  minutes: 2.744
  words: 686
fkglResult: 11.93
---

# `02.0` Union Types and Their Use

In this lesson, we are going to explore a super useful and versatile concept: **Union Types**. If you've ever wondered how to handle variables or parameters that can be of more than one type, you're in the right place. Get ready to take your typing to the next level!

## What are Union Types?

A **Union Type** allows you to define that a variable, parameter, or property can be one of several possible types. It is represented with the `|` (pipe) symbol, and it's like telling TypeScript: "This can be of this type OR of this other one." It's a powerful tool to model flexible data without losing the control that static typing gives us.

For example, imagine you're developing a function that accepts either a number or a string to display an identifier. Without Union Types, you would have to use `any` (which removes the advantages of typing). With Union Types, you can be specific and safe.

## Basic Syntax of Union Types

Let's see how to declare a Union Type. It's very simple:

- For a variable: `let variable: type1 | type2;`
- For a function parameter: `function myFunction(param: type1 | type2) { ... }`

Here's a practical example:

```typescript
let identifier: number | string;
identifier = 123; // ✅ Valid
identifier = "ABC"; // ✅ Valid
// identifier = true; // ❌ Error: Not a number nor a string
```

In this case, `identifier` can be a `number` or a `string`, but it won't accept any other type. TypeScript protects us from errors!

## Real World Application

Union Types shine when you model data that can vary in type depending on the context. Think of an API that returns a result that can be a success object or an error message as a string. With a Union Type, you can define exactly that:

```typescript
type ApiResponse = { data: string } | string;

let response: ApiResponse;
response = { data: "All good" }; // ✅ Valid
response = "Error: Something went wrong"; // ✅ Valid
```

This allows you to handle both cases safely, and TypeScript will help you check which type you're using at any moment with tools like type narrowing, which we will see later.

In the next lesson, we will apply them in more complex exercises. Keep going, you're building a solid foundation in TypeScript!