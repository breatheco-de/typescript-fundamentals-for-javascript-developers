interface Usuario {
  nombre: string;
  edad: number;
  email: string;
}

const nuevoUsuario: Usuario = {
  nombre: "Ana",
  edad: 25,
  email: "ana@example.com"
};

function mostrarUsuario(usuario: Usuario): string {
  return `Hola, me llamo ${usuario.nombre} y tengo ${usuario.edad} años.`;
}

console.log(mostrarUsuario(nuevoUsuario));
