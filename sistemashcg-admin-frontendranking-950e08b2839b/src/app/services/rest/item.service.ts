import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AutenticacionService } from '../autenticacion.service';
import { ItemDto, ItemCreateDto, ItemUpdateDto } from 'src/app/dtos/item.dto';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private nombreModelo = '/item';

  constructor(
    private readonly httpClientService: HttpClient,
    private readonly autenticacionService: AutenticacionService
  ) { }

  findAll(): Observable<ItemDto[]> {
    const headers = new HttpHeaders({Authorization: this.autenticacionService.sesionDto.accessToken});
    return this.httpClientService
      .get<ItemDto[]>(environment.url + this.nombreModelo, {headers});
  }

  findAllWithRango(): Observable<ItemDto[]> {
    const headers = new HttpHeaders({Authorization: this.autenticacionService.sesionDto.accessToken});
    return this.httpClientService
      .get<ItemDto[]>(environment.url + this.nombreModelo + '/rango', {headers});
  }

  findOneById(id: number | string): Observable<ItemDto> {
    const headers = new HttpHeaders({Authorization: this.autenticacionService.sesionDto.accessToken});
    const url = environment.url + this.nombreModelo + '/id/' + id;
    return this.httpClientService
      .get<ItemDto>(url, {headers});
  }

  create(objeto: ItemCreateDto): Observable<ItemDto> {
    const headers = new HttpHeaders({Authorization: this.autenticacionService.sesionDto.accessToken});
    const url = environment.url + this.nombreModelo;
    return this.httpClientService
      .post<ItemDto>(url, objeto, {headers});
  }

  updateOneById(objeto: ItemUpdateDto) {
    const headers = new HttpHeaders({Authorization: this.autenticacionService.sesionDto.accessToken});
    const url = environment.url + this.nombreModelo + '/' + objeto.id;
    return this.httpClientService
      .put<ItemDto>(url, objeto, {headers});
  }

  updateHabilitar(id: number | string): Observable<ItemDto> {
    const headers = new HttpHeaders({Authorization: this.autenticacionService.sesionDto.accessToken});
    return this.httpClientService
      .put<ItemDto>(environment.url + this.nombreModelo + `/activar/${id}`, {headers});
  }

  updateDeshabilitar(id: number | string): Observable<ItemDto> {
    const headers = new HttpHeaders({Authorization: this.autenticacionService.sesionDto.accessToken});
    return this.httpClientService
      .put<ItemDto>(environment.url + this.nombreModelo + `/desactivar/${id}`, {headers});
  }
}
