import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AlertService } from 'src/app/services/alert.service';
import { TipoCajaService } from 'src/app/services/rest/tipo-caja.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UtilitarioService } from 'src/app/services/utilitario.service';
import { TipoCajaDto, TipoCajaUpdateDto } from 'src/app/dtos/tipo-caja.dto';
import { AppConstantMessaga } from 'src/app/app.constant';

@Component({
  selector: 'app-editar-tipo-caja-page',
  templateUrl: './editar-tipo-caja-page.component.html',
  styleUrls: ['./editar-tipo-caja-page.component.css']
})
export class EditarTipoCajaPageComponent implements OnInit {

  formularioFormGroup: FormGroup;
  id: number| string;
  constructor(
    private fb: FormBuilder,
    private readonly alertService: AlertService,
    private readonly tipoCajaService: TipoCajaService,
    private readonly routerService: Router,
    private readonly activatedRouteService: ActivatedRoute,
    private readonly utilitarioService: UtilitarioService
  ) { }

  ngOnInit(): void {
    this.formularioFormGroup = this.fb.group({
      nombreTipoCaja: new FormControl('', Validators.required),
      idTipoCaja: new FormControl({value: '', disabled: true}),
      fechaTipoCaja: new FormControl({value: '', disabled: true}),
      estadoTipoCaja: new FormControl({value: '', disabled: true}),
    });
    const rutaActiva$ = this.activatedRouteService.params;
    rutaActiva$
      .subscribe(
        (parametros) => {
          const tipoCaja$ = this.tipoCajaService.findOneById(parametros.id);
          tipoCaja$.subscribe(
            (obj: TipoCajaDto) => {
              const tipoCajaGet: TipoCajaDto = obj;
              if (!tipoCajaGet) {
                this.alertService.mensajeError(' Tipo de caja no encontrado!');
              }else{
                this.id = tipoCajaGet.id;
                this.formularioFormGroup.get('nombreTipoCaja').setValue(obj.tipoCajaNombre);
                this.formularioFormGroup.get('fechaTipoCaja').setValue(this.utilitarioService.getDateString(obj.fechaHoraActualizacion.toString()));
                this.formularioFormGroup.get('idTipoCaja').setValue(obj.id);
                this.formularioFormGroup.get('estadoTipoCaja').setValue(this.utilitarioService.returnEstadoEntity(obj.estado));
              }
            },
            error1 => this.alertService.mensajeError(AppConstantMessaga.MENSAJE_ERROR_CONEXION_SERVIDOR)
          );
        }
      );
  }

  onClickActualizar(valuesForm: any) {
    if (this.formularioFormGroup.valid) {
      const newTipoCaja = {} as TipoCajaUpdateDto;
      newTipoCaja.tipoCajaNombre = valuesForm.nombreTipoCaja;
      newTipoCaja.id = this.id;
      const evento$ = this.tipoCajaService.updateOneById(newTipoCaja);
      evento$.subscribe(
        (even) => {
          this.alertService.toastSuccess(AppConstantMessaga.MENSAGE_ACTUALIAZCION_CORRECTO);
          this.routerService.navigate((['/tipo-caja']));
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
