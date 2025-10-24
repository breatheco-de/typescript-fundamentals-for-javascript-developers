---
readingTime:
  minutes: 1.916
  words: 479
fkglResult: 12.38
---

# `02.3` Gestionando Estados con Tipos Literales

En la lección anterior, aprendimos qué son los tipos literales y cómo definirlos. Ahora, vamos a llevar esto un paso más allá aplicándolos en una lógica condicional para manejar diferentes estados de una aplicación.

## Aplicando Tipos Literales en Lógica Condicional

Los tipos literales no solo sirven para restringir valores, sino que también son muy útiles para construir lógica en tu código. Al definir estados específicos, puedes usar estructuras condicionales como `if` o `switch` para ejecutar diferentes acciones según el estado. Esto es común en aplicaciones donde necesitas manejar flujos basados en opciones predefinidas, como el estado de un pedido, un usuario o una tarea.



## Instrucciones





1. Define un tipo literal llamado `EstadoMensaje` con los valores `"enviado"`, `"leído"` y `"borrado"`.
2. Crea una interfaz `Mensaje` con las propiedades `id` (number), `contenido` (string) y `estado` (del tipo `EstadoMensaje`).
3. Escribe una función `obtenerDescripcionEstado` que reciba un parámetro de tipo `EstadoMensaje` y devuelva un string describiendo el estado (por ejemplo, si el estado es `"enviado"`, devuelve `"El mensaje ha sido enviado."`).
4. Finalmente, crea un objeto de tipo `Mensaje` y usa la función para mostrar la descripción de su estado en la consola.









¡Nos vemos en la próxima lección, donde evaluaremos todo lo aprendido sobre Union Types y Tipos Literales! Sigue practicando y celebrando tus progresos.