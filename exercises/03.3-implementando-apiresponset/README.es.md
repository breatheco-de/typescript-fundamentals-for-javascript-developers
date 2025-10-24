---
readingTime:
  minutes: 1.376
  words: 344
fkglResult: 11.81
---

# `03.3` Implementando ApiResponse<T>

Ahora, es momento de poner manos a la obra y construir tu propia implementación de esta estructura. Vamos a crear una respuesta simulada de una API que utilice `ApiResponse<T>` para manejar datos de diferentes tipos. El objetivo de esta lección es que implementes la interfaz `ApiResponse<T>` y la uses para tipar una respuesta de API simulada. Trabajarás con un tipo de dato específico y aprenderás a estructurar una respuesta que podría provenir de una API real.







## 📝 Instrucciones:



1. Define la interfaz `ApiResponse<T>` con las siguientes propiedades:
   - `status`: un tipo literal que puede ser 'success' o 'error'.
   - `message`: un string que describe el resultado de la operación.
   - `data`: un valor de tipo `T` que representa los datos devueltos por la API.
2. Define una interfaz `User` con las propiedades `id` (número) y `name` (string).
3. Crea una constante `userResponse` de tipo `ApiResponse<User>` que represente una respuesta exitosa de la API con datos de ejemplo de un usuario.

Escribe tu código en el archivo proporcionado. ¡Asegúrate de que todo esté correctamente tipado!





