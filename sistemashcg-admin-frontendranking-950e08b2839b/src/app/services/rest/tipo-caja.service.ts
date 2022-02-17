import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AutenticacionService } from '../autenticacion.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TipoCajaDto, TipoCajaCreateDto, TipoCajaUpdateDto } from 'src/app/dtos/tipo-caja.dto';

@Injectable({
  providedIn: 'root'
})
export class TipoCajaService {

  private nombreModelo = '/tipo-caja';

  constructor(
    private readonly httpClientService: HttpClient,
    private readonly autenticacionService: AutenticacionService
  ) { }

  findAll(): Observable<TipoCajaDto[]> {
    const headers = new HttpHeaders({Authorization: this.autenticacionService.sesionDto.accessToken});
    return this.httpClientService
      .get<TipoCajaDto[]>(environment.url + this.nombreModelo, {headers});
  }

  findOneById(id: number | string): Observable<TipoCajaDto> {
    const headers = new HttpHeaders({Authorization: this.autenticacionService.sesionDto.accessToken});
    const url = environment.url + this.nombreModelo + '/id/' + id;
    return this.httpClientService
      .get<TipoCajaDto>(url, {headers});
  }

  create(objeto: TipoCajaCreateDto): Observable<TipoCajaDto> {
    const headers = new HttpHeaders({Authorization: this.autenticacionService.sesionDto.accessToken});
    const url = environment.url + this.nombreModelo;
    return this.httpClientService
      .post<TipoCajaDto>(url, objeto, {headers});
  }

  updateOneById(objeto: TipoCajaUpdateDto) {
    const headers = new HttpHeaders({Authorization: this.autenticacionService.sesionDto.accessToken});
    const url = environment.url + this.nombreModelo + '/' + objeto.id;
    return this.httpClientService
      .put<TipoCajaDto>(url, objeto, {headers});
  }

  updateHabilitar(id: number | string): Observable<TipoCajaDto> {
    const headers = new HttpHeaders({Authorization: this.autenticacionService.sesionDto.accessToken});
    return this.httpClientService
      .put<TipoCajaDto>(environment.url + this.nombreModelo + `/activar/${id}`, {headers});
  }

  updateDeshabilitar(id: number | string): Observable<TipoCajaDto> {
    const headers = new HttpHeaders({Authorization: this.autenticacionService.sesionDto.accessToken});
    return this.httpClientService
      .put<TipoCajaDto>(environment.url + this.nombreModelo + `/desactivar/${id}`, {headers});
  }
}
