---
readingTime:
  minutes: 1
  words: 249
fkglResult: 10.06
---

# `02.1` Implementando Union Types

En este ejercicio, crearás una función que acepte diferentes tipos de datos usando Union Types para manejar variedad. Esto te ayudará a entender cómo aplicar este concepto en situaciones reales.

## 📝 Instrucciones:

Tu tarea es crear una función llamada `procesarIdentificador` que acepte un parámetro que pueda ser tanto un `number` como un `string`. La función debe devolver un mensaje que indique el tipo de dato recibido y su valor. Sigue estos pasos:

1. Define la función `procesarIdentificador` con un parámetro de tipo Union (`number | string`).
2. Usa una condición para verificar el tipo de dato recibido (puedes usar `typeof`).
3. Devuelve un mensaje como `"Recibí un número: [valor]"` o `"Recibí una cadena: [valor]"` según corresponda.
4. Prueba tu función con un valor numérico y una cadena para asegurarte de que funciona correctamente.



## 💡 Pista:
Si tienes dudas sobre cómo verificar el tipo de dato, recuerda que `typeof` es tu amigo. Por ejemplo, `typeof valor === 'number'` te dirá si el valor es un número.


Una vez que completes el ejercicio, revisa si tu función maneja ambos tipos de datos correctamente. En la siguiente lección, exploraremos más casos de uso avanzados. ¡Sigue adelante!