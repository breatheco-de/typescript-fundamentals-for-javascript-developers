---
readingTime:
  minutes: 2.488
  words: 622
fkglResult: 13.76
---

# `01.2` Type Aliases and Optional Properties

In this lesson, we are going to explore a very useful concept: **Type Aliases**. In addition, you will learn how to use **optional properties** to make your types more flexible. If you have already mastered interfaces in the previous lesson, this will be a natural step to expand your typing tools. Get ready to keep strengthening your skills!

## What are Type Aliases?

A **Type Alias** is a way to define a custom type in TypeScript. Unlike interfaces, which are usually used to describe the structure of objects, type aliases can represent any type, such as unions, primitives, or even more complex structures. They are defined with the `type` keyword and are incredibly versatile.

For example, imagine you want to define a type for an identifier that can be a number or a string. With a type alias, you can do this easily:

```typescript
 type Identifier = number | string;
```

Now, any variable of type `Identifier` can be a number or a string. This would not be possible with an interface!

## Differences between Type Aliases and Interfaces

Although type aliases and interfaces may seem similar when describing objects, they have key differences. Let's compare them quickly:

| **Aspect**              | **Interface**                          | **Type Alias**                       |
|--------------------------|----------------------------------------|--------------------------------------|
| **Definition**           | Uses `interface`                       | Uses `type`                          |
| **Main use**        | Object structure                 | Any type (unions, primitives, etc.) |
| **Extension**            | Can be extended with `extends`       | Cannot be extended directly   |
| **Flexibility**         | Ideal for objects and classes           | More versatile for complex types   |

In summary, use interfaces when working with objects and you need inheritance, and opt for type aliases when you need flexibility to define more varied types.

## Optional Properties: Flexibility in Your Types

Both in interfaces and in type aliases, you can define **optional properties** using the `?` symbol after the property name. This means that property is not required when creating an object of that type.

Check out this example with a type alias:

```typescript
type Product = {
  name: string;
  price: number;
  description?: string; // Optional property
};

const product1: Product = { name: "Laptop", price: 999 };
const product2: Product = { name: "Mouse", price: 25, description: "Wireless mouse" };
```

In this case, `description` is optional, so `product1` is valid even if it doesn't include it. This is very useful in real applications where you don't always have all the data available.

[Ask Rigobot how to use optional properties in real projects!](https://4geeks.com/ask?query=como-usar-propiedades-opcionales-en-proyectos-reales)

See you in the next lesson to apply these concepts in a more advanced exercise!