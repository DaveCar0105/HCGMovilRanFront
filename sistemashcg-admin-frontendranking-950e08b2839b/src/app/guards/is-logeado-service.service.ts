import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AutenticacionService} from '../services/autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class IsLogeadoServiceService implements CanActivate {

  constructor(
    private readonly autenticacionService: AutenticacionService,
    private readonly routerService: Router
  ) {
  }

  canActivate(): boolean {
    if (this.autenticacionService.sesionDto && this.autenticacionService.estaAutenticado()) {
      return true;
    } else {
      this.routerService.navigate((['login']));
      return false;
    }
    return false;
  }
}
