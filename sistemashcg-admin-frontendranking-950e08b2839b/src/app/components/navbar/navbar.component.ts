import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { UsuarioDto } from 'src/app/dtos/usuario.dto';
import { AutenticacionService } from 'src/app/services/autenticacion.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public user: UsuarioDto;
  public focus;
  public nombre: string;
  public listTitles: any[];
  public location: Location;

  constructor(
    location: Location,
    private element: ElementRef,
    private router: Router,
    private readonly _autenticacionService: AutenticacionService
    ) {
    this.location = location;
  }

  ngOnInit() {
    this.nombre ="Sin Informacion";
    if (this._autenticacionService.sesionDto) {
      this.user = this._autenticacionService.sesionDto.usuarioDto;
      this.nombre = this.user.usuarioNombre;
      /*this.user.nombreFoto = AppConstant.URL_FOTO_PERFIL_USER_DEFAULT;
      if (this.user.nombreFoto === null || this.user.nombreFoto === undefined) {
        this.user.nombreFoto = AppConstant.URL_FOTO_PERFIL_USER_DEFAULT;
      }*/
    }
    this.listTitles = ROUTES.filter(listTitle => listTitle);
  }

  getTitle() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee.charAt(0) === '#') {
      titlee = titlee.slice(1);
    }

    for (var item = 0; item < this.listTitles.length; item++) {
      if (this.listTitles[item].path === titlee) {
        return this.listTitles[item].title;
      }
    }
    return '';
  }

  logOut() {
    this._autenticacionService.sesionDto = null;
    this.router.navigate(['/login']);
  }

}
