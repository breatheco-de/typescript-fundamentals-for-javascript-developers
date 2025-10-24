---
readingTime:
  minutes: 1.268
  words: 317
fkglResult: 10.16
---

# `03.1` Creating a Generic Function

It's time to get hands-on and create your first generic function. In this lesson, we will guide you step by step to implement a simple function that can handle different types of data.

We are going to create a generic function called `repeatValue` that takes a value and a number of repetitions, and returns an array with that value repeated as many times as specified. The key here is that this function should work with **any type of data**, whether it's a number, a string, or even an object.

### 📝 Instructions:
1. Open the `app.ts` file and look at the base code we have provided.
2. Define a generic function `repeatValue` that uses a type parameter `T`.
3. The function should accept two parameters: `value` of type `T` and `times` of type `number`.
4. The function should return an array of type `T[]` with the value repeated the indicated number of times.
5. Make sure to test your function with different types of data (for example, numbers and strings) to verify that it works correctly.

Don't worry if you encounter any obstacles! TypeScript will help you catch type errors as you write.



