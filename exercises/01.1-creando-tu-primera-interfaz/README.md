---
readingTime:
  minutes: 1.176
  words: 294
fkglResult: 10.97
---

# `01.1` Creating Your First Interface

In the previous lesson, you learned what interfaces are and why they are so useful for structuring data in your projects. Now, it's time to get hands-on and create your first interface from scratch.

## 📝 Instructions:

In this exercise, you are going to create an interface for a user and then use that interface to type an object and a function. Follow these steps:

1. Define an interface called `Usuario` with the following properties:
   - `nombre`: of type `string`.
   - `edad`: of type `number`.
   - `email`: of type `string`.
2. Create a variable called `nuevoUsuario` that is an object complying with the structure of the `Usuario` interface.
3. Write a function called `mostrarUsuario` that receives a parameter of type `Usuario` and returns a message like this: "Hello, my name is [nombre] and I am [edad] years old."
4. Call the `mostrarUsuario` function passing the `nuevoUsuario` object as an argument and display the result in the console.

Don't worry if you encounter any errors! TypeScript will help you detect and correct them. Use the `app.ts` file to write your code.

## 💡 Hint

Remember that an interface only defines the structure, it does not contain values. Once you define it, you can use it to type objects and function parameters. If you're not sure how to start, review the examples from the previous lesson.

## Final Reflection

After completing this exercise, think about how this interface could be useful in a real project. What other properties could you add to the `Usuario` interface to make it more complete? Keep exploring and learning!