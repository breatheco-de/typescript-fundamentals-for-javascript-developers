---
readingTime:
  minutes: 1
  words: 249
fkglResult: 10.06
---

# `02.1` Implementing Union Types

In this exercise, you will create a function that accepts different data types using Union Types to handle variety. This will help you understand how to apply this concept in real-life situations.

## 📝 Instructions:

Your task is to create a function called `procesarIdentificador` that accepts a parameter that can be either a `number` or a `string`. The function should return a message indicating the type of data received and its value. Follow these steps:

1. Define the function `procesarIdentificador` with a parameter of Union type (`number | string`).
2. Use a condition to check the type of data received (you can use `typeof`).
3. Return a message like `"I received a number: [value]"` or `"I received a string: [value]"` as appropriate.
4. Test your function with a numeric value and a string to make sure it works correctly.


## 💡 Hint:
If you have doubts about how to check the data type, remember that `typeof` is your friend. For example, `typeof value === 'number'` will tell you if the value is a number.

Once you complete the exercise, check if your function handles both data types correctly. In the next lesson, we will explore more advanced use cases. Keep going!