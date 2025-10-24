---
readingTime:
  minutes: 2.488
  words: 622
fkglResult: 13.76
---

# `01.2` Type Aliases y Propiedades Opcionales

En esta lección vamos a explorar un concepto muy útil, los **Type Aliases** (alias de tipos). Además, aprenderás cómo usar **propiedades opcionales** para hacer tus tipos más flexibles. Si ya dominaste las interfaces en la lección anterior, esto será un paso natural para ampliar tus herramientas de tipado. ¡Prepárate para seguir fortaleciendo tus habilidades!

## ¿Qué son los Type Aliases?

Un **Type Alias** es una forma de definir un tipo personalizado en TypeScript. A diferencia de las interfaces, que suelen usarse para describir la estructura de objetos, los type aliases pueden representar cualquier tipo, como uniones, primitivos, o incluso estructuras más complejas. Se definen con la palabra clave `type` y son increíblemente versátiles.

Por ejemplo, imagina que quieres definir un tipo para un identificador que puede ser un número o una cadena. Con un type alias, puedes hacerlo fácilmente:

```typescript
 type Identificador = number | string;
```

Ahora, cualquier variable de tipo `Identificador` podrá ser un número o una cadena. ¡Esto no sería posible con una interfaz!

## Diferencias entre Type Aliases e Interfaces

Aunque los type aliases y las interfaces pueden parecer similares al describir objetos, tienen diferencias clave. Vamos a compararlas rápidamente:

| **Aspecto**              | **Interface**                          | **Type Alias**                       |
|--------------------------|----------------------------------------|--------------------------------------|
| **Definición**           | Usa `interface`                       | Usa `type`                          |
| **Uso principal**        | Estructura de objetos                 | Cualquier tipo (uniones, primitivos, etc.) |
| **Extensión**            | Se puede extender con `extends`       | No se puede extender directamente   |
| **Flexibilidad**         | Ideal para objetos y clases           | Más versátil para tipos complejos   |

En resumen, usa interfaces cuando trabajes con objetos y necesites herencia, y opta por type aliases cuando necesites flexibilidad para definir tipos más variados.

## Propiedades Opcionales: Flexibilidad en tus Tipos

Tanto en interfaces como en type aliases, puedes definir **propiedades opcionales** usando el símbolo `?` después del nombre de la propiedad. Esto significa que esa propiedad no es obligatoria al crear un objeto de ese tipo.

Mira este ejemplo con un type alias:

```typescript
type Producto = {
  nombre: string;
  precio: number;
  descripcion?: string; // Propiedad opcional
};

const producto1: Producto = { nombre: "Laptop", precio: 999 };
const producto2: Producto = { nombre: "Mouse", precio: 25, descripcion: "Mouse inalámbrico" };
```

En este caso, `descripcion` es opcional, por lo que `producto1` es válido aunque no la incluya. Esto es muy útil en aplicaciones reales donde no siempre tienes todos los datos disponibles.













[¡Pregunta a Rigobot cómo usar propiedades opcionales en proyectos reales!](https://4geeks.com/ask?query=como-usar-propiedades-opcionales-en-proyectos-reales)



¡Nos vemos en la próxima lección para aplicar estos conceptos en un ejercicio más avanzado!