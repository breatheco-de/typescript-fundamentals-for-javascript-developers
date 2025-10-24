---
readingTime:
  minutes: 1.176
  words: 294
fkglResult: 10.97
---

# `01.1` Creando tu Primera Interfaz

En la lección anterior, aprendiste qué son las interfaces y por qué son tan útiles para estructurar datos en tus proyectos. Ahora, es momento de poner manos a la obra y crear tu primera interfaz desde cero. 

## 📝 Instrucciones:

En este ejercicio, vas a crear una interfaz para un usuario y luego usarás esa interfaz para tipar un objeto y una función. Sigue estos pasos:

1. Define una interfaz llamada `Usuario` con las siguientes propiedades:
   - `nombre`: de tipo `string`.
   - `edad`: de tipo `number`.
   - `email`: de tipo `string`.
2. Crea una variable llamada `nuevoUsuario` que sea un objeto que cumpla con la estructura de la interfaz `Usuario`.
3. Escribe una función llamada `mostrarUsuario` que reciba un parámetro de tipo `Usuario` y devuelva un mensaje como este: `"Hola, me llamo [nombre] y tengo [edad] años."`.
4. Llama a la función `mostrarUsuario` pasando el objeto `nuevoUsuario` como argumento y muestra el resultado en la consola.

¡No te preocupes si encuentras algún error! TypeScript te ayudará a detectarlos y corregirlos. Usa el archivo `app.ts` para escribir tu código.

## 💡 Pista

Recuerda que una interfaz solo define la estructura, no contiene valores. Una vez que la definas, puedes usarla para tipar objetos y parámetros de funciones. Si no estás seguro de cómo empezar, revisa los ejemplos de la lección anterior.

## Reflexión Final

Después de completar este ejercicio, piensa en cómo esta interfaz podría ser útil en un proyecto real. ¿Qué otras propiedades podrías agregar a la interfaz `Usuario` para hacerla más completa? ¡Sigue explorando y aprendiendo!
