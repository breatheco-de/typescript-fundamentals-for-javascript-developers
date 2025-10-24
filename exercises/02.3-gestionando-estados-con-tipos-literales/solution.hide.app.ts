type EstadoMensaje = "enviado" | "leído" | "borrado";

interface Mensaje {
  id: number;
  contenido: string;
  estado: EstadoMensaje;
}

function obtenerDescripcionEstado(estado: EstadoMensaje): string {
  switch (estado) {
    case "enviado":
      return "El mensaje ha sido enviado.";
    case "leído":
      return "El mensaje ha sido leído.";
    case "borrado":
      return "El mensaje ha sido borrado.";
  }
}

const miMensaje: Mensaje = { id: 1, contenido: "Hola, ¿cómo estás?", estado: "enviado" };
console.log(obtenerDescripcionEstado(miMensaje.estado)); // Salida: El mensaje ha sido enviado.
