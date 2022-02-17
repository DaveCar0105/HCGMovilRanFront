import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {of} from 'rxjs';
import {environment} from '../../environments/environment';
import {SesionDto} from '../dtos/sesion.dto';


@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  private nombreModelo = '/autenticacion';
  public sesionDto: SesionDto;

  constructor(
    private readonly httpClientService: HttpClient,
  ) {
  }

  login(username: string, pass: string) {
    const Objeto = {
      nickname: username,
      password: pass
    };
    return this.httpClientService
      .post<SesionDto>(environment.url + this.nombreModelo, Objeto)
      .pipe(map(u => {
        this.sesionDto = u;
        if (this.estaAutenticado()) {
          return of(true);
        } else {
          return of(false);
        }
      }));
  }

  estaAutenticado(): boolean {
    return !!this.sesionDto.accessToken;
  }

}
