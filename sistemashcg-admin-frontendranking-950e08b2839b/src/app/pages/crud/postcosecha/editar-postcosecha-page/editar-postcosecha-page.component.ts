import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AlertService } from 'src/app/services/alert.service';
import { PostcoschaService } from 'src/app/services/rest/postcoscha.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UtilitarioService } from 'src/app/services/utilitario.service';
import { PostcosechaDto, PostcosechaUpdateDto } from 'src/app/dtos/postcosecha.dto';
import { AppConstantMessaga } from 'src/app/app.constant';

@Component({
  selector: 'app-editar-postcosecha-page',
  templateUrl: './editar-postcosecha-page.component.html',
  styleUrls: ['./editar-postcosecha-page.component.css']
})
export class EditarPostcosechaPageComponent implements OnInit {

  formularioFormGroup: FormGroup;
  id: number| string;
  constructor(
    private fb: FormBuilder,
    private readonly alertService: AlertService,
    private readonly postcosechaService: PostcoschaService,
    private readonly routerService: Router,
    private readonly activatedRouteService: ActivatedRoute,
    private readonly utilitarioService: UtilitarioService
  ) { }

  ngOnInit(): void {
    this.formularioFormGroup = this.fb.group({
      nombrePostcosecha: new FormControl('', Validators.required),
      idPostcosecha: new FormControl({value: '', disabled: true}),
      fechaPostcosecha: new FormControl({value: '', disabled: true}),
      estadoPostcosecha: new FormControl({value: '', disabled: true}),
    });
    const rutaActiva$ = this.activatedRouteService.params;
    rutaActiva$
      .subscribe(
        (parametros) => {
          const postcpsecha$ = this.postcosechaService.findOneById(parametros.id);
          postcpsecha$.subscribe(
            (obj: PostcosechaDto) => {
              const postcosechaGet: PostcosechaDto = obj;
              if (!postcosechaGet) {
                this.alertService.mensajeError(' Postcosecha no encontrado!');
              }else{
                this.id = postcosechaGet.id;
                this.formularioFormGroup.get('nombrePostcosecha').setValue(obj.postcosechaNombre);
                this.formularioFormGroup.get('fechaPostcosecha').setValue(this.utilitarioService.getDateString(obj.fechaHoraActualizacion.toString()));
                this.formularioFormGroup.get('idPostcosecha').setValue(obj.id);
                this.formularioFormGroup.get('estadoPostcosecha').setValue(this.utilitarioService.returnEstadoEntity(obj.estado));
              }
            },
            error1 => this.alertService.mensajeError(AppConstantMessaga.MENSAJE_ERROR_CONEXION_SERVIDOR)
          );
        }
      );
  }

  onClickActualizar(valuesForm: any) {
    if (this.formularioFormGroup.valid) {
      const newCausa = {} as PostcosechaUpdateDto;
      newCausa.postcosechaNombre = valuesForm.nombrePostcosecha;
      newCausa.id = this.id;
      const evento$ = this.postcosechaService.updateOneById(newCausa);
      evento$.subscribe(
        (even) => {
          this.alertService.toastSuccess(AppConstantMessaga.MENSAGE_ACTUALIAZCION_CORRECTO);
          this.routerService.navigate((['/postcosecha']));
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
