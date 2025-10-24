---
readingTime:
  minutes: 1.508
  words: 377
fkglResult: 12.76
---

# `01.3` Applying Type Aliases

In the previous lesson, you learned about **Type Aliases** and how to use optional properties to make your types more flexible. In this exercise, we are going to define a type alias to represent a **User Profile** and use it to handle different types of user data. This will allow you to practice how to assign types and work with optional properties in a more realistic context.




## Instructions



1. Define a type alias called `UserProfile` with the following properties:
   - `id`: of type `number` (required).
   - `name`: of type `string` (required).
   - `email`: of type `string` (optional).
   - `phone`: of type `string` (optional).
2. Create a variable of type `UserProfile` with only the required properties.
3. Create another variable of type `UserProfile` with all the properties, including the optional ones.
4. Display both profiles in the console to verify that TypeScript does not throw errors.

Use the `app.ts` file to write your code. Don't be afraid to try different combinations of data!

## 💡 Tip

Remember to use the `?` symbol for optional properties. Make sure that the required properties are always present in your objects; otherwise, TypeScript will show you an error.

[Ask Rigobot how to model dynamic data with TypeScript!](https://4geeks.com/ask?query=como-modelar-datos-dinamicos-con-typescript)



See you in the next lesson to keep exploring the possibilities of TypeScript!