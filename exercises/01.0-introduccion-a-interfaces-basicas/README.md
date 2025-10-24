---
readingTime:
  minutes: 2.376
  words: 594
fkglResult: 15.03
---

# `01.0` Introduction to Basic Interfaces

In this lesson, we are going to explore what **interfaces** are in TypeScript, what their purpose is, and how they are used to define basic data structures in your projects. If you already have experience with JavaScript, you will see that interfaces are a powerful tool to add clarity and safety to your code. Get ready to learn and apply this essential concept!

## What are Interfaces in TypeScript?

Think of an interface as a contract that specifies what properties and methods an object must have, and what types those values should be. This helps ensure that the code is more predictable and easier to maintain, allowing for:

- **Clear structure:** They define what data should look like, making teamwork and code reading easier.
- **Early error detection:** They help identify problems while writing code, not during execution.
- **Reusability:** You can use the same interface in multiple parts of your project, ensuring consistency.

In real projects, interfaces are especially useful when working with APIs, forms, or any situation where data must follow a specific format. You can define an interface like this:

```typescript
interface Contacto {
  nombre: string;
  telefono: number;
}
```

Now, if you try to create a contact without one of these properties, TypeScript will show you an error. This is what makes interfaces so valuable: they force you to follow the rules you defined yourself.

In the next lesson, you will put this knowledge into practice by creating your first interface from scratch. Keep going and get ready to code!

[Ask Rigobot if you need more examples of interfaces in TypeScript!](https://4geeks.com/ask?query=ejemplos-de-interfaces-en-typescript)