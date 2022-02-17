import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AutenticacionService } from '../autenticacion.service';
import { UsuarioDto, CrearUsuarioDto, EditarUsuarioDto } from 'src/app/dtos/usuario.dto';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private nombreModelo = '/usuario';

  constructor(
    private readonly httpClientService: HttpClient,
    private readonly autenticacionService: AutenticacionService
  ) { }

  findAll(): Observable<UsuarioDto[]> {
    const headers = new HttpHeaders({Authorization: this.autenticacionService.sesionDto.accessToken});
    return this.httpClientService
      .get<UsuarioDto[]>(environment.url + this.nombreModelo, {headers});
  }

  findOneById(id: number | string): Observable<UsuarioDto> {
    const headers = new HttpHeaders({Authorization: this.autenticacionService.sesionDto.accessToken});
    const url = environment.url + this.nombreModelo + '/id/' + id;
    return this.httpClientService
      .get<UsuarioDto>(url, {headers});
  }

  create(objeto: CrearUsuarioDto): Observable<UsuarioDto> {
    const headers = new HttpHeaders({Authorization: this.autenticacionService.sesionDto.accessToken});
    const url = environment.url + this.nombreModelo;
    return this.httpClientService
      .post<UsuarioDto>(url, objeto, {headers});
  }

  updateOneById(objeto: EditarUsuarioDto) {
    const headers = new HttpHeaders({Authorization: this.autenticacionService.sesionDto.accessToken});
    const url = environment.url + this.nombreModelo + '/' + objeto.id;
    return this.httpClientService
      .put<UsuarioDto>(url, objeto, {headers});
  }

  updateHabilitar(id: number | string): Observable<UsuarioDto> {
    const headers = new HttpHeaders({Authorization: this.autenticacionService.sesionDto.accessToken});
    return this.httpClientService
      .put<UsuarioDto>(environment.url + this.nombreModelo + `/activar/${id}`, {headers});
  }

  updateDeshabilitar(id: number | string): Observable<UsuarioDto> {
    const headers = new HttpHeaders({Authorization: this.autenticacionService.sesionDto.accessToken});
    return this.httpClientService
      .put<UsuarioDto>(environment.url + this.nombreModelo + `/desactivar/${id}`, {headers});
  }
}
