---
readingTime:
  minutes: 3.268
  words: 817
fkglResult: 12.61
---

# `03.0` Introduction to Simple Generics

Imagine you're creating a function that can work with different types of data, such as numbers, strings, or even custom objects. Without generics, you would have to write a version of that function for each data type or use the `any` type, losing the safety that TypeScript offers. This is where **Generics** come in: they are like templates that allow you to define functions, classes, or interfaces that can operate with any data type, while maintaining strict control over those types.

Generics are essential for creating reusable components. Think of them as a box that can contain anything, but you know exactly what's inside when you use it. This not only reduces code duplication, but also makes your application more maintainable and scalable. Sounds useful, right? Let's see it in action!

```typescript
function devolverNumero(valor: number): number {
  return valor;
}

function devolverTexto(valor: string): string {
  return valor;
}
```

Here you have two almost identical functions, only the types change. This is not efficient. With generics, you can write a single function that works for any type:

```typescript
function devolverValor<T>(valor: T): T {
  return valor;
}
```

In this case, `T` is a **type parameter**. It acts as a placeholder that will be replaced by a specific type when you use the function. For example:

- `devolverValor<number>(5)` returns a number.
- `devolverValor<string>('Hola')` returns a string.

## Practical Applications of Generics

Generics are not only used in functions. They are also incredibly useful in classes and interfaces. For example, imagine you're creating a class to handle a list of elements. Without generics, you would have to limit yourself to a specific type or use `any`. With generics, you can do something like this:

```typescript
class Lista<T> {
  private elementos: T[] = [];

  agregar(elemento: T): void {
    this.elementos.push(elemento);
  }

  obtenerTodos(): T[] {
    return this.elementos;
  }
}

// Using the class with different types
const listaNumeros = new Lista<number>();
listaNumeros.agregar(1);
listaNumeros.agregar(2);

const listaTextos = new Lista<string>();
listaTextos.agregar('Hola');
listaTextos.agregar('Mundo');
```

Here, the `Lista` class can handle any data type, but it remains safe because TypeScript knows what type of elements each instance contains. This is ideal for reusable data structures like arrays, stacks, or queues.

| **Benefit**                | **Description**                                                                 |
|----------------------------|---------------------------------------------------------------------------------|
| **Reusability**            | Write a single function or class that works with multiple data types.            |
| **Type Safety**            | Maintain control over types, avoiding compile-time errors.                       |
| **Maintainability**        | Reduce code duplication, making updates and fixes easier.                        |

If you want to explore more about this topic, feel free to ask. [Ask Rigobot how generics can improve your projects!](https://4geeks.com/ask?query=como-pueden-los-genericos-mejorar-mis-proyectos)

See you in the next lesson, where we'll create our first generic function! Keep going, you're doing an amazing job.