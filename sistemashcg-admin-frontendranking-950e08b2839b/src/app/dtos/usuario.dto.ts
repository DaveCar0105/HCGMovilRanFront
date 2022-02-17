export interface UsuarioDto {
  id: number;
  fechaHoraRegistro: string;
  fechaHoraActualizacion: string;
  usuarioNombre: string;
  usuarioUsername: string;
  usuarioCodigo: string;
  estado: number;
}

export class CrearUsuarioDto {
  usuarioNombre: string;
  usuarioUsername: string;
  usuarioCodigo: string;
  usuarioPassword: string;
}

export class EditarUsuarioDto {
  id: number | string;
  usuarioNombre: string;
  usuarioCodigo: string;
  usuarioPassword: string;
}
