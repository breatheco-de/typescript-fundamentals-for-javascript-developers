---
readingTime:
  minutes: 3.468
  words: 867
fkglResult: 14.55
---

# `03.2` ApiResponse<T> and its Application

In this session, we are going to explore how to use generics to structure API responses in a flexible and safe way with a structure like `ApiResponse<T>`. This concept is fundamental for working with dynamic data in modern applications, as it will allow you to type API responses regardless of the type of data they return.



## What is ApiResponse<T> and why do we need it?

When you work with APIs, responses usually have a common structure: a status (success or error), a message, and most importantly, the data, which can be of any type (a user, a list of products, an error, etc.). This is where `ApiResponse<T>` comes into play. This generic structure allows us to define a type that encapsulates an API response, while the specific data type is defined with the parameter `T`. For example, imagine that an API can return a user object in one request and a list of orders in another. With `ApiResponse<T>`, you can type both responses safely without having to create separate interfaces for each case.



Let's define a generic interface `ApiResponse<T>` that represents a typical API response. This interface will have the following properties:

- `status`: a value indicating whether the request was successful (for example, 'success' or 'error').
- `message`: a descriptive message about the result of the request.
- `data`: the content of the response, which can be of any type (defined by `T`).



```typescript
interface ApiResponse<T> {
  status: 'success' | 'error';
  message: string;
  data: T;
}
```

With this structure, you can use `ApiResponse<T>` to type API responses with different data types. For example, `ApiResponse<string>` for a response that returns text, or `ApiResponse<User>` for a response that returns a user object.

## Practical application of ApiResponse<T>

Now that we understand the theory, let's apply it in a practical example. Imagine you are developing an application that consumes an API to get information about users and products. Let's create two types of responses using `ApiResponse<T>`.



First, let's define interfaces for `User` and `Product`:

```typescript
interface User {
  id: number;
  name: string;
}

interface Product {
  id: number;
  title: string;
  price: number;
}
```



Now, we can use `ApiResponse<T>` to type the API responses for users and products:

```typescript
const userResponse: ApiResponse<User> = {
  status: 'success',
  message: 'User successfully obtained',
  data: { id: 1, name: 'Ana Gómez' }
};

const productResponse: ApiResponse<Product> = {
  status: 'success',
  message: 'Product successfully obtained',
  data: { id: 101, title: 'Bluetooth Headphones', price: 49.99 }
};
```



We can also use `ApiResponse<T>` to handle errors. For example, if the API does not find a user, we can return an object with `status: 'error'` and an empty or generic data type:

```typescript
const errorResponse: ApiResponse<null> = {
  status: 'error',
  message: 'User not found',
  data: null
};
```



Using `ApiResponse<T>` not only makes your code safer and more readable, but it also saves you time by reusing a generic structure for different data types. In large projects, where APIs return multiple types of responses, this technique will allow you to keep your code more organized and scalable.



















[Ask Rigobot how to apply ApiResponse<T> in a real project!](https://4geeks.com/ask?query=como-aplicar-apiresponse-en-un-proyecto-real)
