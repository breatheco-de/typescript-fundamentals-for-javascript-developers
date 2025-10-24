function procesarIdentificador(id: number | string): string {
  if (typeof id === 'number') {
    return `Recibí un número: ${id}`;
  } else {
    return `Recibí una cadena: ${id}`;
  }
}

// Pruebas
console.log(procesarIdentificador(123)); // Recibí un número: 123
console.log(procesarIdentificador("ABC")); // Recibí una cadena: ABC
