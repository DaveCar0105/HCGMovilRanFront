export interface UsuarioDto {
  id: number;
  fechaHoraRegistro: string;
  fechaHoraActualizacion: string;
  usuarioNombre: string;
  usuarioUsername: string;
  usuarioCodigo: string;
  estado: boolean;
}

export class CrearUsuarioDto {
  usuarioNombre: string;
  usuarioUsername: string;
  usuarioCodigo: string;
  usuarioPassword: string;
}

export class EditarUsuarioDto {
  usuarioNombre: string;
  usuarioUsername: string;
  usuarioCodigo: string;
}
