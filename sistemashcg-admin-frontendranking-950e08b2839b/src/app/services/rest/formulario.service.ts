import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AutenticacionService } from '../autenticacion.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FormularioDto, FormularioCreateDto } from 'src/app/dtos/formulario.dto';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  private nombreModelo = '/formulario';

  constructor(
    private readonly httpClientService: HttpClient,
    private readonly autenticacionService: AutenticacionService
  ) { }

  findAll(): Observable<FormularioDto[]> {
    const headers = new HttpHeaders({Authorization: this.autenticacionService.sesionDto.accessToken});
    return this.httpClientService
      .get<FormularioDto[]>(environment.url + this.nombreModelo, {headers});
  }

  findOneById(id: number | string): Observable<FormularioDto> {
    const headers = new HttpHeaders({Authorization: this.autenticacionService.sesionDto.accessToken});
    const url = environment.url + this.nombreModelo + '/id/' + id;
    return this.httpClientService
      .get<FormularioDto>(url, {headers});
  }

  create(objeto: FormularioCreateDto): Observable<FormularioDto> {
    const headers = new HttpHeaders({Authorization: this.autenticacionService.sesionDto.accessToken});
    const url = environment.url + this.nombreModelo;
    return this.httpClientService
      .post<FormularioDto>(url, objeto, {headers});
  }

  updateHabilitar(id: number | string): Observable<FormularioDto> {
    const headers = new HttpHeaders({Authorization: this.autenticacionService.sesionDto.accessToken});
    return this.httpClientService
      .put<FormularioDto>(environment.url + this.nombreModelo + `/activar/${id}`, {headers});
  }

  updateDeshabilitar(id: number | string): Observable<FormularioDto> {
    const headers = new HttpHeaders({Authorization: this.autenticacionService.sesionDto.accessToken});
    return this.httpClientService
      .put<FormularioDto>(environment.url + this.nombreModelo + `/desactivar/${id}`, {headers});
  }
}
