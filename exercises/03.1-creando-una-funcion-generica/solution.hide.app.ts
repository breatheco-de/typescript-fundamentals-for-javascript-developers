function repetirValor<T>(valor: T, veces: number): T[] {
  const resultado: T[] = [];
  for (let i = 0; i < veces; i++) {
    resultado.push(valor);
  }
  return resultado;
}

// Ejemplo de uso:
console.log(repetirValor<number>(5, 3)); // [5, 5, 5]
console.log(repetirValor<string>('Hola', 2)); // ['Hola', 'Hola']
