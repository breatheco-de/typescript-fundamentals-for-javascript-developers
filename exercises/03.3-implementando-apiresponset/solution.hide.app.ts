interface ApiResponse<T> {
  status: 'success' | 'error';
  message: string;
  data: T;
}

interface User {
  id: number;
  name: string;
}

const userResponse: ApiResponse<User> = {
  status: 'success',
  message: 'Usuario obtenido con éxito',
  data: { id: 1, name: 'Juan Pérez' }
};
