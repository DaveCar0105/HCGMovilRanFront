import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AutenticacionService } from '../autenticacion.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductoDto, ProductoCreateDto, ProductoUpdateDto } from 'src/app/dtos/producto.dto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private nombreModelo = '/producto';

  constructor(
    private readonly httpClientService: HttpClient,
    private readonly autenticacionService: AutenticacionService
  ) { }

  findAll(): Observable<ProductoDto[]> {
    const headers = new HttpHeaders({Authorization: this.autenticacionService.sesionDto.accessToken});
    return this.httpClientService
      .get<ProductoDto[]>(environment.url + this.nombreModelo, {headers});
  }

  findOneById(id: number | string): Observable<ProductoDto> {
    const headers = new HttpHeaders({Authorization: this.autenticacionService.sesionDto.accessToken});
    const url = environment.url + this.nombreModelo + '/id/' + id;
    return this.httpClientService
      .get<ProductoDto>(url, {headers});
  }

  create(objeto: ProductoCreateDto): Observable<ProductoDto> {
    const headers = new HttpHeaders({Authorization: this.autenticacionService.sesionDto.accessToken});
    const url = environment.url + this.nombreModelo;
    return this.httpClientService
      .post<ProductoDto>(url, objeto, {headers});
  }

  updateOneById(objeto: ProductoUpdateDto) {
    const headers = new HttpHeaders({Authorization: this.autenticacionService.sesionDto.accessToken});
    const url = environment.url + this.nombreModelo + '/' + objeto.id;
    return this.httpClientService
      .put<ProductoDto>(url, objeto, {headers});
  }

  updateHabilitar(id: number | string): Observable<ProductoDto> {
    const headers = new HttpHeaders({Authorization: this.autenticacionService.sesionDto.accessToken});
    return this.httpClientService
      .put<ProductoDto>(environment.url + this.nombreModelo + `/activar/${id}`, {headers});
  }

  updateDeshabilitar(id: number | string): Observable<ProductoDto> {
    const headers = new HttpHeaders({Authorization: this.autenticacionService.sesionDto.accessToken});
    return this.httpClientService
      .put<ProductoDto>(environment.url + this.nombreModelo + `/desactivar/${id}`, {headers});
  }
}
