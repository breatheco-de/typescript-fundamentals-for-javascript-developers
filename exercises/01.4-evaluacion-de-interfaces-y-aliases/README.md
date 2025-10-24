---
readingTime:
  minutes: 2.512
  words: 628
fkglResult: 13.19
---

# `01.4` Evaluation of Interfaces and Aliases

Below, you will find a series of questions designed to assess your understanding of interfaces and type aliases in TypeScript. Read each question carefully and select the correct answer. Don't worry if you're not sure, this is part of the learning process!

1. What is the main difference between an interface and a type alias in TypeScript?

   - [ ] An interface can only define required properties, while a type alias allows optional properties.
   - [x] An interface can be extended with `extends`, while a type alias does not support inheritance in the same way.
   - [ ] A type alias can only be used with primitive types, while interfaces are for objects.
   - [ ] There is no difference, they are the same.

2. What symbol is used to define an optional property in an interface or type alias?

   - [ ] `!`
   - [ ] `*`
   - [x] `?`
   - [ ] `#`

3. What happens if you try to create an object from a type alias without including a required property?

   - [ ] TypeScript allows it without issues.
   - [x] TypeScript will throw a compilation error.
   - [ ] The object will be created, but the missing property will automatically be `undefined`.
   - [ ] TypeScript will ignore required properties.

4. Which of the following declarations is correct for an interface with an optional property?

   - [ ] `interface Usuario { nombre: string; edad: number! }`
   - [x] `interface Usuario { nombre: string; edad?: number }`
   - [ ] `interface Usuario { nombre: string; edad: number? }`
   - [ ] `interface Usuario { nombre: string; edad: ?number }`

Take a moment to think: Which concept did you find more challenging, interfaces or type aliases? Why? Reflecting on your difficulties will help you focus on the areas you need to strengthen. You're doing a great job, keep going!