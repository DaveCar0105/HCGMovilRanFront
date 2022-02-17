import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { AlertService } from 'src/app/services/alert.service';
import { AppConstantMessaga } from 'src/app/app.constant';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  public username = 'admin';
  public password = 'admin';
  private ruta = ['inicio'];

  constructor(
    private router: Router,
    private loginService: AutenticacionService,
    private readonly alertService: AlertService,
  ) {}

  ngOnInit() {
    this.login()
  }
  ngOnDestroy() {
  }

  login() {
    if ((this.username) && (this.password)) {
      this.loginService.login(this.username, this.password).subscribe(
        estaAutenticado => {
          if (estaAutenticado) {
            this.alertService.logInSuccess(':D Bienvenido al Sistema DAT');
            this.router.navigate(this.ruta);
          } else {
            this.alertService.mensajeError('Credenciales Inválidas!');
          }
        },
        error => {
          if(error.status!=400)
            this.alertService.mensajeError(AppConstantMessaga.MENSAJE_ERROR_CONEXION_SERVIDOR);
          else
          this.alertService.mensajeError('Credenciales Inválidas!');
        });
    } else {
      this.alertService.mensajeError('Ingrese las credenciales!');
    }
  }

}
