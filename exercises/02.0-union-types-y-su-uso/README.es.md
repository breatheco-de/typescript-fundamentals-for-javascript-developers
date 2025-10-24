---
readingTime:
  minutes: 2.744
  words: 686
fkglResult: 11.93
---

# `02.0` Union Types y su Uso

En esta lección, vamos a explorar un concepto súper útil y versátil: los **Union Types**. Si alguna vez te has preguntado cómo manejar variables o parámetros que pueden ser de más de un tipo, estás en el lugar correcto. ¡Prepárate para llevar tu tipado al siguiente nivel!

## ¿Qué son los Union Types?

Un **Union Type** te permite definir que una variable, parámetro o propiedad puede ser de uno de varios tipos posibles. Se representa con el símbolo `|` (pipe), y es como decirle a TypeScript: "Esto puede ser de este tipo O de este otro". Es una herramienta poderosa para modelar datos flexibles sin perder el control que nos da el tipado estático.

Por ejemplo, imagina que estás desarrollando una función que acepta tanto un número como una cadena de texto para mostrar un identificador. Sin Union Types, tendrías que usar `any` (lo cual elimina las ventajas del tipado). Con Union Types, puedes ser específico y seguro.

## Sintaxis Básica de Union Types

Veamos cómo se declara un Union Type. Es muy sencillo:

- Para una variable: `let variable: tipo1 | tipo2;`
- Para un parámetro de función: `function miFuncion(param: tipo1 | tipo2) { ... }`

Aquí tienes un ejemplo práctico:

```typescript
let identificador: number | string;
identificador = 123; // ✅ Válido
identificador = "ABC"; // ✅ Válido
// identificador = true; // ❌ Error: No es ni number ni string
```

En este caso, `identificador` puede ser un `number` o un `string`, pero no aceptará ningún otro tipo. ¡TypeScript nos protege de errores!

## Aplicación en el Mundo Real

Los Union Types brillan cuando modelas datos que pueden variar en tipo dependiendo del contexto. Piensa en una API que devuelve un resultado que puede ser un objeto de éxito o un mensaje de error como cadena. Con un Union Type, puedes definir exactamente eso:

```typescript
type RespuestaApi = { datos: string } | string;

let respuesta: RespuestaApi;
respuesta = { datos: "Todo bien" }; // ✅ Válido
respuesta = "Error: Algo salió mal"; // ✅ Válido
```

Esto te permite manejar ambos casos de manera segura, y TypeScript te ayudará a verificar qué tipo estás usando en cada momento con herramientas como el estrechamiento de tipos (type narrowing), que veremos más adelante.



















En la próxima lección, los aplicaremos en ejercicios más complejos. ¡Sigue adelante, estás construyendo una base sólida en TypeScript!