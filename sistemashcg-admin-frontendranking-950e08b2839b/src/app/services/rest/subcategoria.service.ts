import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AutenticacionService } from '../autenticacion.service';
import { SubcategoriaDto, SubcategoriaCreateDto, SubcategoriaUpdateDto } from 'src/app/dtos/subcategoria.dto';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubcategoriaService {

  private nombreModelo = '/subcategoria';

  constructor(
    private readonly httpClientService: HttpClient,
    private readonly autenticacionService: AutenticacionService
  ) { }

  findAll(): Observable<SubcategoriaDto[]> {
    const headers = new HttpHeaders({Authorization: this.autenticacionService.sesionDto.accessToken});
    return this.httpClientService
      .get<SubcategoriaDto[]>(environment.url + this.nombreModelo, {headers});
  }

  findAllByItems(): Observable<SubcategoriaDto[]> {
    const headers = new HttpHeaders({Authorization: this.autenticacionService.sesionDto.accessToken});
    return this.httpClientService
      .get<SubcategoriaDto[]>(environment.url + this.nombreModelo + '/items', {headers});
  }

  findOneById(id: number | string): Observable<SubcategoriaDto> {
    const headers = new HttpHeaders({Authorization: this.autenticacionService.sesionDto.accessToken});
    const url = environment.url + this.nombreModelo + '/id/' + id;
    return this.httpClientService
      .get<SubcategoriaDto>(url, {headers});
  }

  create(objeto: SubcategoriaCreateDto): Observable<SubcategoriaDto> {
    const headers = new HttpHeaders({Authorization: this.autenticacionService.sesionDto.accessToken});
    const url = environment.url + this.nombreModelo;
    return this.httpClientService
      .post<SubcategoriaDto>(url, objeto, {headers});
  }

  updateOneById(objeto: SubcategoriaUpdateDto) {
    const headers = new HttpHeaders({Authorization: this.autenticacionService.sesionDto.accessToken});
    const url = environment.url + this.nombreModelo + '/' + objeto.id;
    return this.httpClientService
      .put<SubcategoriaDto>(url, objeto, {headers});
  }

  updateHabilitar(id: number | string): Observable<SubcategoriaDto> {
    const headers = new HttpHeaders({Authorization: this.autenticacionService.sesionDto.accessToken});
    return this.httpClientService
      .put<SubcategoriaDto>(environment.url + this.nombreModelo + `/activar/${id}`, {headers});
  }

  updateDeshabilitar(id: number | string): Observable<SubcategoriaDto> {
    const headers = new HttpHeaders({Authorization: this.autenticacionService.sesionDto.accessToken});
    return this.httpClientService
      .put<SubcategoriaDto>(environment.url + this.nombreModelo + `/desactivar/${id}`, {headers});
  }
}
