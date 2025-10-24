---
readingTime:
  minutes: 1.376
  words: 344
fkglResult: 11.81
---

# `03.3` Implementing ApiResponse<T>

Now, it's time to get hands-on and build your own implementation of this structure. We are going to create a simulated API response that uses `ApiResponse<T>` to handle data of different types. The goal of this lesson is for you to implement the `ApiResponse<T>` interface and use it to type a simulated API response. You will work with a specific data type and learn how to structure a response that could come from a real API.

## 📝 Instructions:

1. Define the `ApiResponse<T>` interface with the following properties:
   - `status`: a literal type that can be 'success' or 'error'.
   - `message`: a string that describes the result of the operation.
   - `data`: a value of type `T` that represents the data returned by the API.
2. Define a `User` interface with the properties `id` (number) and `name` (string).
3. Create a constant `userResponse` of type `ApiResponse<User>` that represents a successful API response with example user data.

Write your code in the provided file. Make sure everything is properly typed!