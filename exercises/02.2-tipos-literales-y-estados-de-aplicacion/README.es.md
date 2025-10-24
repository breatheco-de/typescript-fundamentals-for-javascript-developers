---
readingTime:
  minutes: 3.5
  words: 875
fkglResult: 12.85
---

# `02.2` Tipos Literales y Estados de Aplicación

Bienvenido a esta lección sobre **Tipos Literales** en TypeScript. Hoy vamos a explorar un concepto poderoso que te permitirá restringir los valores que una variable puede tomar, algo súper útil para modelar estados en tus aplicaciones.

## ¿Qué son los Tipos Literales?

Los tipos literales son una forma de definir valores específicos que una variable puede aceptar. En lugar de permitir cualquier `string` o `number`, puedes limitar las opciones a valores concretos, como `"activo"`, `"inactivo"` o `42`. Esto es ideal para representar estados, roles o configuraciones fijas en tu aplicación.

Por ejemplo, imagina que estás desarrollando una app donde un usuario puede tener un estado de conexión que solo puede ser `"online"` o `"offline"`. Con los tipos literales, puedes asegurarte de que no se asignen valores incorrectos como `"desconectado"` o cualquier otra cosa. 



```typescript
type EstadoConexion = "online" | "offline";

let estadoUsuario: EstadoConexion;

estadoUsuario = "online";  // ✅ Válido
estadoUsuario = "offline"; // ✅ Válido
estadoUsuario = "desconectado"; // ❌ Error: "desconectado" no es un valor permitido
```































## 💡 Aplicación en la Gestión de Estados

Los tipos literales brillan cuando gestionas estados en una aplicación. Por ejemplo, en una app de comercio electrónico, podrías definir los estados de un pedido como `"procesando"`, `"enviado"` o `"entregado"`. Esto no solo hace que tu código sea más legible, sino que también evita bugs al restringir los valores posibles. 



```typescript
type EstadoPedido = "procesando" | "enviado" | "entregado";

let estadoActual: EstadoPedido;

estadoActual = "procesando"; // ✅ Válido
estadoActual = "enviado";    // ✅ Válido
estadoActual = "entregado";  // ✅ Válido
estadoActual = "cancelado";  // ❌ Error: "cancelado" no es un valor permitido
```





Piensa en los tipos literales como una forma de documentar y proteger tu lógica. En lugar de usar cadenas genéricas que pueden tener errores tipográficos (como escribir `"procesando"` como `"procesnado"`), los tipos literales te obligan a usar solo los valores correctos.

















Antes de pasar a la siguiente lección, piensa en una aplicación o proyecto en el que estés trabajando. ¿Hay algún estado o configuración que podrías modelar con tipos literales? Comparte tus ideas o dudas con tus compañeros o instrutores si tienes la oportunidad.



[¡Pregunta a Rigobot cómo usar tipos literales en otros escenarios!](https://4geeks.com/ask?query=como-usar-tipos-literales-en-otros-escenarios)