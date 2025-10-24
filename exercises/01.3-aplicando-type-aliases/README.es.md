---
readingTime:
  minutes: 1.508
  words: 377
fkglResult: 12.76
---

# `01.3` Aplicando Type Aliases

En la lección anterior, aprendiste sobre **Type Aliases** y cómo usar propiedades opcionales para hacer tus tipos más flexibles. En este ejercicio, vamos a definir un type alias para representar un **Perfil de Usuario** y lo usaremos para manejar diferentes tipos de datos de usuario. Esto te permitirá practicar cómo asignar tipos y trabajar con propiedades opcionales en un contexto más realista.





## Instrucciones



1. Define un type alias llamado `PerfilUsuario` con las siguientes propiedades:
   - `id`: de tipo `number` (obligatorio).
   - `nombre`: de tipo `string` (obligatorio).
   - `email`: de tipo `string` (opcional).
   - `telefono`: de tipo `string` (opcional).
2. Crea una variable de tipo `PerfilUsuario` con solo las propiedades obligatorias.
3. Crea otra variable de tipo `PerfilUsuario` con todas las propiedades, incluyendo las opcionales.
4. Muestra ambos perfiles en la consola para verificar que TypeScript no arroja errores.

Usa el archivo `app.ts` para escribir tu código. ¡No tengas miedo de probar diferentes combinaciones de datos!

## 💡 Pista

Recuerda usar el símbolo `?` para las propiedades opcionales. Asegúrate de que las propiedades obligatorias estén siempre presentes en tus objetos; de lo contrario, TypeScript te mostrará un error.

[¡Pregunta a Rigobot cómo modelar datos dinámicos con TypeScript!](https://4geeks.com/ask?query=como-modelar-datos-dinamicos-con-typescript)



¡Nos vemos en la próxima lección para seguir explorando las posibilidades de TypeScript!