type PerfilUsuario = {
  id: number;
  nombre: string;
  email?: string;
  telefono?: string;
};

const usuario1: PerfilUsuario = { id: 1, nombre: "Ana García" };
const usuario2: PerfilUsuario = { id: 2, nombre: "Juan Pérez", email: "juan@example.com", telefono: "+1234567890" };

console.log(usuario1);
console.log(usuario2);
