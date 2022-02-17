import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AutenticacionService } from '../autenticacion.service';
import { Observable } from 'rxjs';
import { CategoriaDto, CategoriaCreateDto, CategoriaUpdateDto } from 'src/app/dtos/categoria.dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private nombreModelo = '/categoria';

  constructor(
    private readonly httpClientService: HttpClient,
    private readonly autenticacionService: AutenticacionService
  ) { }

  findAll(): Observable<CategoriaDto[]> {
    const headers = new HttpHeaders({Authorization: this.autenticacionService.sesionDto.accessToken});
    return this.httpClientService
      .get<CategoriaDto[]>(environment.url + this.nombreModelo, {headers});
  }

  findOneById(id: number | string): Observable<CategoriaDto> {
    const headers = new HttpHeaders({Authorization: this.autenticacionService.sesionDto.accessToken});
    const url = environment.url + this.nombreModelo + '/id/' + id;
    return this.httpClientService
      .get<CategoriaDto>(url, {headers});
  }

  create(objeto: CategoriaCreateDto): Observable<CategoriaDto> {
    const headers = new HttpHeaders({Authorization: this.autenticacionService.sesionDto.accessToken});
    const url = environment.url + this.nombreModelo;
    return this.httpClientService
      .post<CategoriaDto>(url, objeto, {headers});
  }

  updateOneById(objeto: CategoriaUpdateDto) {
    const headers = new HttpHeaders({Authorization: this.autenticacionService.sesionDto.accessToken});
    const url = environment.url + this.nombreModelo + '/' + objeto.id;
    return this.httpClientService
      .put<CategoriaDto>(url, objeto, {headers});
  }

  updateHabilitar(id: number | string): Observable<CategoriaDto> {
    const headers = new HttpHeaders({Authorization: this.autenticacionService.sesionDto.accessToken});
    return this.httpClientService
      .put<CategoriaDto>(environment.url + this.nombreModelo + `/activar/${id}`, {headers});
  }

  updateDeshabilitar(id: number | string): Observable<CategoriaDto> {
    const headers = new HttpHeaders({Authorization: this.autenticacionService.sesionDto.accessToken});
    return this.httpClientService
      .put<CategoriaDto>(environment.url + this.nombreModelo + `/desactivar/${id}`, {headers});
  }
}
