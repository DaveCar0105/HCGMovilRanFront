import { Injectable } from '@angular/core';
import { AutenticacionService } from '../autenticacion.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CargueraDto, CargueraCreateDto, CargueraUpdateDto } from 'src/app/dtos/carguera.dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CargueraService {

  private nombreModelo = '/carguera';

  constructor(
    private readonly httpClientService: HttpClient,
    private readonly autenticacionService: AutenticacionService
  ) { }

  findAll(): Observable<CargueraDto[]> {
    const headers = new HttpHeaders({Authorization: this.autenticacionService.sesionDto.accessToken});
    return this.httpClientService
      .get<CargueraDto[]>(environment.url + this.nombreModelo, {headers});
  }

  findOneById(id: number | string): Observable<CargueraDto> {
    const headers = new HttpHeaders({Authorization: this.autenticacionService.sesionDto.accessToken});
    const url = environment.url + this.nombreModelo + '/id/' + id;
    return this.httpClientService
      .get<CargueraDto>(url, {headers});
  }

  create(objeto: CargueraCreateDto): Observable<CargueraDto> {
    const headers = new HttpHeaders({Authorization: this.autenticacionService.sesionDto.accessToken});
    const url = environment.url + this.nombreModelo;
    return this.httpClientService
      .post<CargueraDto>(url, objeto, {headers});
  }

  updateOneById(objeto: CargueraUpdateDto) {
    const headers = new HttpHeaders({Authorization: this.autenticacionService.sesionDto.accessToken});
    const url = environment.url + this.nombreModelo + '/' + objeto.id;
    return this.httpClientService
      .put<CargueraDto>(url, objeto, {headers});
  }

  updateHabilitar(id: number | string): Observable<CargueraDto> {
    const headers = new HttpHeaders({Authorization: this.autenticacionService.sesionDto.accessToken});
    return this.httpClientService
      .put<CargueraDto>(environment.url + this.nombreModelo + `/activar/${id}`, {headers});
  }

  updateDeshabilitar(id: number | string): Observable<CargueraDto> {
    const headers = new HttpHeaders({Authorization: this.autenticacionService.sesionDto.accessToken});
    return this.httpClientService
      .put<CargueraDto>(environment.url + this.nombreModelo + `/desactivar/${id}`, {headers});
  }
}
