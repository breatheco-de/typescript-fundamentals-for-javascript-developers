---
readingTime:
  minutes: 3.5
  words: 875
fkglResult: 12.85
---

# `02.2` Literal Types and Application States

Welcome to this lesson on **Literal Types** in TypeScript. Today we are going to explore a powerful concept that will allow you to restrict the values a variable can take, something super useful for modeling states in your applications.

## What are Literal Types?

Literal types are a way to define specific values that a variable can accept. Instead of allowing any `string` or `number`, you can limit the options to concrete values, such as `"active"`, `"inactive"`, or `42`. This is ideal for representing states, roles, or fixed configurations in your application.

For example, imagine you are developing an app where a user can have a connection state that can only be `"online"` or `"offline"`. With literal types, you can ensure that incorrect values like `"disconnected"` or anything else are not assigned.

```typescript
type ConnectionState = "online" | "offline";

let userState: ConnectionState;

userState = "online";  // ✅ Valid
userState = "offline"; // ✅ Valid
userState = "disconnected"; // ❌ Error: "disconnected" is not an allowed value
```

## 💡 Application in State Management

Literal types shine when you manage states in an application. For example, in an e-commerce app, you could define the states of an order as `"processing"`, `"shipped"`, or `"delivered"`. This not only makes your code more readable, but also prevents bugs by restricting the possible values.

```typescript
type OrderState = "processing" | "shipped" | "delivered";

let currentState: OrderState;

currentState = "processing"; // ✅ Valid
currentState = "shipped";    // ✅ Valid
currentState = "delivered";  // ✅ Valid
currentState = "cancelled";  // ❌ Error: "cancelled" is not an allowed value
```

Think of literal types as a way to document and protect your logic. Instead of using generic strings that can have typos (like writing `"processing"` as `"procesnado"`), literal types force you to use only the correct values.

Before moving on to the next lesson, think about an application or project you are working on. Is there any state or configuration you could model with literal types? Share your ideas or questions with your classmates or instructors if you have the opportunity.

[Ask Rigobot how to use literal types in other scenarios!](https://4geeks.com/ask?query=como-usar-tipos-literales-en-otros-escenarios)
