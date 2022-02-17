import {UsuarioDto} from './usuario.dto';

export interface SesionDto {
  accessToken: string;
  usuarioDto: UsuarioDto;
}
