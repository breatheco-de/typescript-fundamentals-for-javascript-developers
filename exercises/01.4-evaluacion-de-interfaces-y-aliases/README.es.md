---
readingTime:
  minutes: 2.512
  words: 628
fkglResult: 13.19
---

# `01.4` Evaluación de Interfaces y Aliases





A continuación, encontrarás una serie de preguntas diseñadas para evaluar tu comprensión sobre interfaces y type aliases en TypeScript. Lee cada pregunta con atención y selecciona la respuesta correcta. ¡No te preocupes si no estás seguro(a), esto es parte del aprendizaje!

1. ¿Cuál es la diferencia principal entre una interfaz y un type alias en TypeScript?

   - [ ] Una interfaz solo puede definir propiedades obligatorias, mientras que un type alias permite propiedades opcionales.
   - [x] Una interfaz puede ser extendida con `extends`, mientras que un type alias no soporta herencia de la misma manera.
   - [ ] Un type alias solo puede usarse con tipos primitivos, mientras que las interfaces son para objetos.
   - [ ] No hay diferencia, son lo mismo.

2. ¿Qué símbolo se usa para definir una propiedad opcional en una interfaz o type alias?

   - [ ] `!`
   - [ ] `*`
   - [x] `?`
   - [ ] `#`

3. ¿Qué sucede si intentas crear un objeto de un type alias sin incluir una propiedad obligatoria?

   - [ ] TypeScript lo permite sin problemas.
   - [x] TypeScript arrojará un error de compilación.
   - [ ] El objeto se creará, pero la propiedad faltante será `undefined` automáticamente.
   - [ ] TypeScript ignorará las propiedades obligatorias.

4. ¿Cuál de las siguientes declaraciones es correcta para una interfaz con una propiedad opcional?

   - [ ] `interface Usuario { nombre: string; edad: number! }`
   - [x] `interface Usuario { nombre: string; edad?: number }`
   - [ ] `interface Usuario { nombre: string; edad: number? }`
   - [ ] `interface Usuario { nombre: string; edad: ?number }`



















Tómate un momento para pensar: ¿Qué concepto te resultó más desafiante, las interfaces o los type aliases? ¿Por qué? Reflexionar sobre tus dificultades te ayudará a enfocarte en las áreas que necesitas reforzar. ¡Estás haciendo un gran trabajo, sigue adelante!