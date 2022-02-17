import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AlertService } from 'src/app/services/alert.service';
import { UsuarioService } from 'src/app/services/rest/usuario.service';
import { Router } from '@angular/router';
import { CrearUsuarioDto } from 'src/app/dtos/usuario.dto';
import { AppConstantMessaga } from 'src/app/app.constant';

@Component({
  selector: 'app-crear-usuario-page',
  templateUrl: './crear-usuario-page.component.html',
  styleUrls: ['./crear-usuario-page.component.css']
})
export class CrearUsuarioPageComponent implements OnInit {

  formularioFormGroup: FormGroup;
  constructor(
    private fb: FormBuilder,
    private readonly alertService: AlertService,
    private readonly usuarioService: UsuarioService,
    private readonly routerService: Router,
  ) {
    this.formularioFormGroup = this.fb.group({
      nombreUsuario: new FormControl('', Validators.required),
      codigoUsuario: new FormControl('', Validators.required),
      usernameUsuario: new FormControl('', Validators.required),
      passwordUsuario: new FormControl('', Validators.required),
    });
   }

  ngOnInit(): void {
  }

  onClickGuardar(valuesForm: any) {
    if (this.formularioFormGroup.valid) {
      const newUsuario = {} as CrearUsuarioDto;
      newUsuario.usuarioNombre = valuesForm.nombreUsuario;
      newUsuario.usuarioCodigo = valuesForm.codigoUsuario;
      newUsuario.usuarioUsername = valuesForm.usernameUsuario;
      newUsuario.usuarioPassword = valuesForm.passwordUsuario;
      const evento$ = this.usuarioService.create(newUsuario);
      evento$.subscribe(
        (even) => {
          this.alertService.toastSuccess(AppConstantMessaga.MENSAGE_CREADO_CORRECTO);
          this.routerService.navigate((['/usuario']));
        },
        (error) => this.alertService.mensajeError(AppConstantMessaga.MENSAGE_ERROR_CREAR)
      );
    } else {
      Object.keys(this.formularioFormGroup.controls).forEach(key => {
        this.formularioFormGroup.controls[key].markAsDirty();
      });
      this.alertService.mensajeError(AppConstantMessaga.MENSAGE_LLENAR_FORMULARIO);
    }
  }

}
