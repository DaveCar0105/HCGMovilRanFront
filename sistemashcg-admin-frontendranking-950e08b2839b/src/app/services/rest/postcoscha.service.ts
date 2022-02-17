import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AutenticacionService } from '../autenticacion.service';
import { Observable } from 'rxjs';
import { PostcosechaDto, PostcosechaCreateDto, PostcosechaUpdateDto } from 'src/app/dtos/postcosecha.dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostcoschaService {

  private nombreModelo = '/postcosecha';

  constructor(
    private readonly httpClientService: HttpClient,
    private readonly autenticacionService: AutenticacionService
  ) { }

  findAll(): Observable<PostcosechaDto[]> {
    const headers = new HttpHeaders({Authorization: this.autenticacionService.sesionDto.accessToken});
    return this.httpClientService
      .get<PostcosechaDto[]>(environment.url + this.nombreModelo, {headers});
  }

  findOneById(id: number | string): Observable<PostcosechaDto> {
    const headers = new HttpHeaders({Authorization: this.autenticacionService.sesionDto.accessToken});
    const url = environment.url + this.nombreModelo + '/id/' + id;
    return this.httpClientService
      .get<PostcosechaDto>(url, {headers});
  }

  create(objeto: PostcosechaCreateDto): Observable<PostcosechaDto> {
    const headers = new HttpHeaders({Authorization: this.autenticacionService.sesionDto.accessToken});
    const url = environment.url + this.nombreModelo;
    return this.httpClientService
      .post<PostcosechaDto>(url, objeto, {headers});
  }

  updateOneById(objeto: PostcosechaUpdateDto) {
    const headers = new HttpHeaders({Authorization: this.autenticacionService.sesionDto.accessToken});
    const url = environment.url + this.nombreModelo + '/' + objeto.id;
    return this.httpClientService
      .put<PostcosechaDto>(url, objeto, {headers});
  }

  updateHabilitar(id: number | string): Observable<PostcosechaDto> {
    const headers = new HttpHeaders({Authorization: this.autenticacionService.sesionDto.accessToken});
    return this.httpClientService
      .put<PostcosechaDto>(environment.url + this.nombreModelo + `/activar/${id}`, {headers});
  }

  updateDeshabilitar(id: number | string): Observable<PostcosechaDto> {
    const headers = new HttpHeaders({Authorization: this.autenticacionService.sesionDto.accessToken});
    return this.httpClientService
      .put<PostcosechaDto>(environment.url + this.nombreModelo + `/desactivar/${id}`, {headers});
  }
}
