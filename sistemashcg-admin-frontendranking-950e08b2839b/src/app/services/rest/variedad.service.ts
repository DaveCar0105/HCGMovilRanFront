import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AutenticacionService } from '../autenticacion.service';
import { VariedadDto, VariedadCreateDto, VariedadUpdateDto } from 'src/app/dtos/variedad.dto';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VariedadService {

  private nombreModelo = '/variedad';

  constructor(
    private readonly httpClientService: HttpClient,
    private readonly autenticacionService: AutenticacionService
  ) { }

  findAll(): Observable<VariedadDto[]> {
    const headers = new HttpHeaders({Authorization: this.autenticacionService.sesionDto.accessToken});
    return this.httpClientService
      .get<VariedadDto[]>(environment.url + this.nombreModelo, {headers});
  }

  findOneById(id: number | string): Observable<VariedadDto> {
    const headers = new HttpHeaders({Authorization: this.autenticacionService.sesionDto.accessToken});
    const url = environment.url + this.nombreModelo + '/id/' + id;
    return this.httpClientService
      .get<VariedadDto>(url, {headers});
  }

  create(objeto: VariedadCreateDto): Observable<VariedadDto> {
    const headers = new HttpHeaders({Authorization: this.autenticacionService.sesionDto.accessToken});
    const url = environment.url + this.nombreModelo;
    return this.httpClientService
      .post<VariedadDto>(url, objeto, {headers});
  }

  updateOneById(objeto: VariedadUpdateDto) {
    const headers = new HttpHeaders({Authorization: this.autenticacionService.sesionDto.accessToken});
    const url = environment.url + this.nombreModelo + '/' + objeto.id;
    return this.httpClientService
      .put<VariedadDto>(url, objeto, {headers});
  }

  updateHabilitar(id: number | string): Observable<VariedadDto> {
    const headers = new HttpHeaders({Authorization: this.autenticacionService.sesionDto.accessToken});
    return this.httpClientService
      .put<VariedadDto>(environment.url + this.nombreModelo + `/activar/${id}`, {headers});
  }

  updateDeshabilitar(id: number | string): Observable<VariedadDto> {
    const headers = new HttpHeaders({Authorization: this.autenticacionService.sesionDto.accessToken});
    return this.httpClientService
      .put<VariedadDto>(environment.url + this.nombreModelo + `/desactivar/${id}`, {headers});
  }
}
