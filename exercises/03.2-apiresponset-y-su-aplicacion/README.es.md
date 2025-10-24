---
readingTime:
  minutes: 3.468
  words: 867
fkglResult: 14.55
---

# `03.2` ApiResponse<T> y su Aplicación

En esta sesión, vamos a explorar cómo utilizar genéricos para estructurar respuestas de APIs de manera flexible y segura con una estructura como `ApiResponse<T>`. Este concepto es fundamental para trabajar con datos dinámicos en aplicaciones modernas, ya que te permitirá tipar las respuestas de una API sin importar el tipo de datos que devuelvan.



## ¿Qué es ApiResponse<T> y por qué lo necesitamos?

Cuando trabajas con APIs, las respuestas suelen tener una estructura común: un estado (éxito o error), un mensaje y, lo más importante, los datos que pueden ser de cualquier tipo (un usuario, una lista de productos, un error, etc.). Aquí es donde entra en juego `ApiResponse<T>`. Esta estructura genérica nos permite definir un tipo que encapsula la respuesta de una API, mientras que el tipo de datos específico se define con el parámetro `T`. Por ejemplo, imagina que una API puede devolver un objeto de usuario en una petición y una lista de pedidos en otra. Con `ApiResponse<T>`, puedes tipar ambas respuestas de manera segura sin tener que crear interfaces separadas para cada caso.





Vamos a definir una interfaz genérica `ApiResponse<T>` que represente una respuesta típica de una API. Esta interfaz tendrá las siguientes propiedades:

- `status`: un valor que indica si la petición fue exitosa (por ejemplo, 'success' o 'error').
- `message`: un mensaje descriptivo sobre el resultado de la petición.
- `data`: el contenido de la respuesta, que puede ser de cualquier tipo (definido por `T`).



```typescript
interface ApiResponse<T> {
  status: 'success' | 'error';
  message: string;
  data: T;
}
```

Con esta estructura, puedes usar `ApiResponse<T>` para tipar respuestas de APIs con diferentes tipos de datos. Por ejemplo, `ApiResponse<string>` para una respuesta que devuelve un texto, o `ApiResponse<User>` para una respuesta que devuelve un objeto de usuario.

## Aplicación práctica de ApiResponse<T>

Ahora que entendemos la teoría, vamos a aplicarla en un ejemplo práctico. Imagina que estás desarrollando una aplicación que consume una API para obtener información de usuarios y productos. Vamos a crear dos tipos de respuestas usando `ApiResponse<T>`.



Primero, definamos interfaces para `User` y `Product`:

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



Ahora, podemos usar `ApiResponse<T>` para tipar las respuestas de la API para usuarios y productos:

```typescript
const userResponse: ApiResponse<User> = {
  status: 'success',
  message: 'Usuario obtenido con éxito',
  data: { id: 1, name: 'Ana Gómez' }
};

const productResponse: ApiResponse<Product> = {
  status: 'success',
  message: 'Producto obtenido con éxito',
  data: { id: 101, title: 'Auriculares Bluetooth', price: 49.99 }
};
```



También podemos usar `ApiResponse<T>` para manejar errores. Por ejemplo, si la API no encuentra un usuario, podemos devolver un objeto con `status: 'error'` y un tipo de dato vacío o genérico:

```typescript
const errorResponse: ApiResponse<null> = {
  status: 'error',
  message: 'Usuario no encontrado',
  data: null
};
```



Usar `ApiResponse<T>` no solo hace que tu código sea más seguro y legible, sino que también te ahorra tiempo al reutilizar una estructura genérica para diferentes tipos de datos. En proyectos grandes, donde las APIs devuelven múltiples tipos de respuestas, esta técnica te permitirá mantener un código más organizado y escalable.
















[¡Pregunta a Rigobot cómo aplicar ApiResponse<T> en un proyecto real!](https://4geeks.com/ask?query=como-aplicar-apiresponse-en-un-proyecto-real)