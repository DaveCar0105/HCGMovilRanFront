import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AlertService } from 'src/app/services/alert.service';
import { UsuarioService } from 'src/app/services/rest/usuario.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UtilitarioService } from 'src/app/services/utilitario.service';
import { UsuarioDto, CrearUsuarioDto, EditarUsuarioDto } from 'src/app/dtos/usuario.dto';
import { AppConstantMessaga } from 'src/app/app.constant';

@Component({
  selector: 'app-editar-usuario-page',
  templateUrl: './editar-usuario-page.component.html',
  styleUrls: ['./editar-usuario-page.component.css']
})
export class EditarUsuarioPageComponent implements OnInit {

  formularioFormGroup: FormGroup;
  id: number| string;
  constructor(
    private fb: FormBuilder,
    private readonly alertService: AlertService,
    private readonly usuarioService: UsuarioService,
    private readonly routerService: Router,
    private readonly activatedRouteService: ActivatedRoute,
    private readonly utilitarioService: UtilitarioService
  ) { }

  ngOnInit(): void {
    this.formularioFormGroup = this.fb.group({
      nombreUsuario: new FormControl('', Validators.required),
      codigoUsuario: new FormControl('', Validators.required),
      usernameUsuario: new FormControl({value: '', disabled: true}),
      passwordUsuario: new FormControl('', Validators.required),
      idUsuario: new FormControl({value: '', disabled: true}),
      fechaUsuario: new FormControl({value: '', disabled: true}),
      estadoUsuario: new FormControl({value: '', disabled: true}),
    });
    const rutaActiva$ = this.activatedRouteService.params;
    rutaActiva$
      .subscribe(
        (parametros) => {
          const usuario$ = this.usuarioService.findOneById(parametros.id);
          usuario$.subscribe(
            (obj: UsuarioDto) => {
              const usuarioGet: UsuarioDto = obj;
              if (!usuarioGet) {
                this.alertService.mensajeError(' Usuario no encontrado!');
              }else{
                this.id = usuarioGet.id;
                this.formularioFormGroup.get('nombreUsuario').setValue(obj.usuarioNombre);
                this.formularioFormGroup.get('codigoUsuario').setValue(obj.usuarioCodigo);
                this.formularioFormGroup.get('usernameUsuario').setValue(obj.usuarioUsername);
                this.formularioFormGroup.get('fechaUsuario').setValue(this.utilitarioService.getDateString(obj.fechaHoraActualizacion.toString()));
                this.formularioFormGroup.get('idUsuario').setValue(obj.id);
                this.formularioFormGroup.get('estadoUsuario').setValue(this.utilitarioService.returnEstadoEntity(obj.estado));
              }
            },
            error1 => this.alertService.mensajeError(AppConstantMessaga.MENSAJE_ERROR_CONEXION_SERVIDOR)
          );
        }
      );
  }

  onClickActualizar(valuesForm: any) {
    if (this.formularioFormGroup.valid) {
      const newUsuario = {} as EditarUsuarioDto;
      newUsuario.usuarioNombre = valuesForm.nombreUsuario;
      newUsuario.usuarioCodigo = valuesForm.codigoUsuario;
      newUsuario.usuarioPassword = valuesForm.passwordUsuario;
      newUsuario.id = this.id;
      const evento$ = this.usuarioService.updateOneById(newUsuario);
      evento$.subscribe(
        (even) => {
          this.alertService.toastSuccess(AppConstantMessaga.MENSAGE_ACTUALIAZCION_CORRECTO);
          this.routerService.navigate((['/usuario']));
        },
        (error) => this.alertService.mensajeError(AppConstantMessaga.MENSAGE_ERROR_ACTUALIZAR)
      );
    } else {
      Object.keys(this.formularioFormGroup.controls).forEach(key => {
        this.formularioFormGroup.controls[key].markAsDirty();
      });
      this.alertService.mensajeError(AppConstantMessaga.MENSAGE_LLENAR_FORMULARIO);
    }
  }

}
