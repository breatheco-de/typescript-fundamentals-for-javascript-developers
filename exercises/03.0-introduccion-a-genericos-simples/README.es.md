---
readingTime:
  minutes: 3.268
  words: 817
fkglResult: 12.61
---

# `03.0` Introducción a Genéricos Simples





Imagina que estás creando una función que puede trabajar con diferentes tipos de datos, como números, cadenas de texto o incluso objetos personalizados. Sin genéricos, tendrías que escribir una versión de esa función para cada tipo de dato o usar el tipo `any`, perdiendo la seguridad que TypeScript ofrece. Aquí es donde entran los **Genéricos**: son como plantillas que te permiten definir funciones, clases o interfaces que pueden operar con cualquier tipo de dato, pero manteniendo un control estricto sobre esos tipos.

Los genéricos son esenciales para crear componentes reutilizables. Piensa en ellos como una caja que puede contener cualquier cosa, pero que sabes exactamente qué hay dentro cuando la usas. Esto no solo reduce la duplicación de código, sino que también hace que tu aplicación sea más mantenible y escalable. ¿Suena útil, verdad? ¡Vamos a verlo en acción!





```typescript
function devolverNumero(valor: number): number {
  return valor;
}

function devolverTexto(valor: string): string {
  return valor;
}
```

Aquí tienes dos funciones casi idénticas, solo cambian los tipos. Esto no es eficiente. Con genéricos, puedes escribir una sola función que funcione para cualquier tipo:

```typescript
function devolverValor<T>(valor: T): T {
  return valor;
}
```

En este caso, `T` es un **parámetro de tipo**. Actúa como un marcador que será reemplazado por un tipo específico cuando uses la función. Por ejemplo:

- `devolverValor<number>(5)` devuelve un número.
- `devolverValor<string>('Hola')` devuelve una cadena de texto.



## Aplicaciones Prácticas de los Genéricos

Los genéricos no solo se usan en funciones. También son increíblemente útiles en clases e interfaces. Por ejemplo, imagina que estás creando una clase para manejar una lista de elementos. Sin genéricos, tendrías que limitarte a un tipo específico o usar `any`. Con genéricos, puedes hacer algo como esto:

```typescript
class Lista<T> {
  private elementos: T[] = [];

  agregar(elemento: T): void {
    this.elementos.push(elemento);
  }

  obtenerTodos(): T[] {
    return this.elementos;
  }
}

// Usar la clase con diferentes tipos
const listaNumeros = new Lista<number>();
listaNumeros.agregar(1);
listaNumeros.agregar(2);

const listaTextos = new Lista<string>();
listaTextos.agregar('Hola');
listaTextos.agregar('Mundo');
```

Aquí, la clase `Lista` puede manejar cualquier tipo de dato, pero sigue siendo segura porque TypeScript sabe qué tipo de elementos contiene cada instancia. Esto es ideal para estructuras de datos reutilizables como arrays, pilas o colas.





| **Beneficio**                | **Descripción**                                                                 |
|------------------------------|---------------------------------------------------------------------------------|
| **Reutilización**            | Escribe una sola función o clase que funcione con múltiples tipos de datos.    |
| **Seguridad de Tipos**       | Mantén el control sobre los tipos, evitando errores en tiempo de compilación.   |
| **Mantenibilidad**           | Reduce la duplicación de código, facilitando las actualizaciones y correcciones.|













Si quieres explorar más sobre este tema, no dudes en preguntar. [¡Pregunta a Rigobot cómo los genéricos pueden mejorar tus proyectos!](https://4geeks.com/ask?query=como-pueden-los-genericos-mejorar-mis-proyectos)

¡Nos vemos en la próxima lección, donde crearemos nuestra primera función genérica! Sigue adelante, estás haciendo un trabajo increíble.