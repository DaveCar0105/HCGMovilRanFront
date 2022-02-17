import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AlertService } from 'src/app/services/alert.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UtilitarioService } from 'src/app/services/utilitario.service';
import { CausaService } from 'src/app/services/rest/causa.service';
import { CausaDto, CausaUpdateDto } from 'src/app/dtos/causa.dto';
import { AppConstantMessaga } from 'src/app/app.constant';

@Component({
  selector: 'app-editar-causa-page',
  templateUrl: './editar-causa-page.component.html',
  styleUrls: ['./editar-causa-page.component.css']
})
export class EditarCausaPageComponent implements OnInit {

  formularioFormGroup: FormGroup;
  id: number| string;
  constructor(
    private fb: FormBuilder,
    private readonly alertService: AlertService,
    private readonly causaService: CausaService,
    private readonly routerService: Router,
    private readonly activatedRouteService: ActivatedRoute,
    private readonly utilitarioService: UtilitarioService
  ) { }

  ngOnInit(): void {
    this.formularioFormGroup = this.fb.group({
      nombreCausa: new FormControl('', Validators.required),
      idCausa: new FormControl({value: '', disabled: true}),
      fechaCausa: new FormControl({value: '', disabled: true}),
      estadoCausa: new FormControl({value: '', disabled: true}),
    });
    const rutaActiva$ = this.activatedRouteService.params;
    rutaActiva$
      .subscribe(
        (parametros) => {
          const causa$ = this.causaService.findOneById(parametros.id);
          causa$.subscribe(
            (obj: CausaDto) => {
              const causaGet: CausaDto = obj;
              if (!causaGet) {
                this.alertService.mensajeError(' Causa no encontrado!');
              }else{
                this.id = causaGet.id;
                this.formularioFormGroup.get('nombreCausa').setValue(obj.causaNombre);
                this.formularioFormGroup.get('fechaCausa').setValue(this.utilitarioService.getDateString(obj.fechaHoraActualizacion.toString()));
                this.formularioFormGroup.get('idCausa').setValue(obj.id);
                this.formularioFormGroup.get('estadoCausa').setValue(this.utilitarioService.returnEstadoEntity(obj.estado));
              }
            },
            error1 => this.alertService.mensajeError(AppConstantMessaga.MENSAJE_ERROR_CONEXION_SERVIDOR)
          );
        }
      );
  }

  onClickActualizar(valuesForm: any) {
    if (this.formularioFormGroup.valid) {
      const newCausa = {} as CausaUpdateDto;
      newCausa.causaNombre = valuesForm.nombreCausa;
      newCausa.id = this.id;
      const evento$ = this.causaService.updateOneById(newCausa);
      evento$.subscribe(
        (even) => {
          this.alertService.toastSuccess(AppConstantMessaga.MENSAGE_ACTUALIAZCION_CORRECTO);
          this.routerService.navigate((['/causa']));
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
