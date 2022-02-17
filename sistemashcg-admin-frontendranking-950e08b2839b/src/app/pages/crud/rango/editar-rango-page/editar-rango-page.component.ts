import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AlertService } from 'src/app/services/alert.service';
import { RangoService } from 'src/app/services/rest/rango.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UtilitarioService } from 'src/app/services/utilitario.service';
import { RangoDto, RangoUpdateDto } from 'src/app/dtos/rango.dto';
import { AppConstantMessaga } from 'src/app/app.constant';

@Component({
  selector: 'app-editar-rango-page',
  templateUrl: './editar-rango-page.component.html',
  styleUrls: ['./editar-rango-page.component.css']
})
export class EditarRangoPageComponent implements OnInit {

  formularioFormGroup: FormGroup;
  id: number| string;
  constructor(
    private fb: FormBuilder,
    private readonly alertService: AlertService,
    private readonly rangoService: RangoService,
    private readonly routerService: Router,
    private readonly activatedRouteService: ActivatedRoute,
    private readonly utilitarioService: UtilitarioService
  ) { }

  ngOnInit(): void {
    this.formularioFormGroup = this.fb.group({
      nombreRango: new FormControl('', Validators.required),
      minimoRango: new FormControl('', [Validators.required, Validators.pattern("^[0-9]+(.[0-9]{0,2})?$")]),
      maximoRango: new FormControl('', [Validators.required, Validators.pattern("^[0-9]+(.[0-9]{0,2})?$")]),
      cantidadRango: new FormControl('', [Validators.required, Validators.pattern("^[0-9]+(.[0-9]{0,2})?$")]),
      idRango: new FormControl({value: '', disabled: true}),
      fechaRango: new FormControl({value: '', disabled: true}),
      estadoRango: new FormControl({value: '', disabled: true}),
    });
    const rutaActiva$ = this.activatedRouteService.params;
    rutaActiva$
      .subscribe(
        (parametros) => {
          const causa$ = this.rangoService.findOneById(parametros.id);
          causa$.subscribe(
            (obj: RangoDto) => {
              const rangoGet: RangoDto = obj;
              if (!rangoGet) {
                this.alertService.mensajeError(' Rango no encontrado!');
              }else{
                this.id = rangoGet.id;
                this.formularioFormGroup.get('nombreRango').setValue(obj.rangoNombre);
                this.formularioFormGroup.get('minimoRango').setValue(obj.minimo);
                this.formularioFormGroup.get('maximoRango').setValue(obj.maximo);
                this.formularioFormGroup.get('cantidadRango').setValue(obj.cantidadDisminuir);
                this.formularioFormGroup.get('fechaRango').setValue(this.utilitarioService.getDateString(obj.fechaHoraActualizacion.toString()));
                this.formularioFormGroup.get('idRango').setValue(obj.id);
                this.formularioFormGroup.get('estadoRango').setValue(this.utilitarioService.returnEstadoEntity(obj.estado));
              }
            },
            error1 => this.alertService.mensajeError(AppConstantMessaga.MENSAJE_ERROR_CONEXION_SERVIDOR)
          );
        }
      );
  }

  onClickActualizar(valuesForm: any) {
    if (this.formularioFormGroup.valid) {
      const newRango = {} as RangoUpdateDto;
      newRango.rangoNombre = valuesForm.nombreRango;
      newRango.minimo = valuesForm.minimoRango;
      newRango.maximo = valuesForm.maximoRango;
      newRango.cantidadDisminuir = valuesForm.cantidadRango;
      newRango.id = this.id;
      const evento$ = this.rangoService.updateOneById(newRango);
      evento$.subscribe(
        (even) => {
          this.alertService.toastSuccess(AppConstantMessaga.MENSAGE_ACTUALIAZCION_CORRECTO);
          this.routerService.navigate((['/rango']));
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
