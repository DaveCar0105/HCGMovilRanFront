import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AutenticacionService } from '../autenticacion.service';
import { ItemRangoDto } from 'src/app/dtos/item-rango.dto';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemRangoService {

  private nombreModelo = '/item-rango';

  constructor(
    private readonly httpClientService: HttpClient,
    private readonly autenticacionService: AutenticacionService
  ) { }

  findAll(): Observable<ItemRangoDto[]> {
    const headers = new HttpHeaders({Authorization: this.autenticacionService.sesionDto.accessToken});
    return this.httpClientService
      .get<ItemRangoDto[]>(environment.url + this.nombreModelo, {headers});
  }

  findOneById(id: number | string): Observable<ItemRangoDto> {
    const headers = new HttpHeaders({Authorization: this.autenticacionService.sesionDto.accessToken});
    const url = environment.url + this.nombreModelo + '/id/' + id;
    return this.httpClientService
      .get<ItemRangoDto>(url, {headers});
  }

  create(objeto: ItemRangoDto): Observable<ItemRangoDto> {
    const headers = new HttpHeaders({Authorization: this.autenticacionService.sesionDto.accessToken});
    const url = environment.url + this.nombreModelo;
    return this.httpClientService
      .post<ItemRangoDto>(url, objeto, {headers});
  }

}
