import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AlertService } from 'src/app/services/alert.service';
import { PaisService } from 'src/app/services/rest/pais.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UtilitarioService } from 'src/app/services/utilitario.service';
import { PaisDto, PaisUpdateDto } from 'src/app/dtos/pais.dto';
import { AppConstantMessaga } from 'src/app/app.constant';

@Component({
  selector: 'app-editar-pais-page',
  templateUrl: './editar-pais-page.component.html',
  styleUrls: ['./editar-pais-page.component.css']
})
export class EditarPaisPageComponent implements OnInit {

  formularioFormGroup: FormGroup;
  id: number| string;
  constructor(
    private fb: FormBuilder,
    private readonly alertService: AlertService,
    private readonly paisService: PaisService,
    private readonly routerService: Router,
    private readonly activatedRouteService: ActivatedRoute,
    private readonly utilitarioService: UtilitarioService
  ) { }

  ngOnInit(): void {
    this.formularioFormGroup = this.fb.group({
      nombrePais: new FormControl('', Validators.required),
      idPais: new FormControl({value: '', disabled: true}),
      fechaPais: new FormControl({value: '', disabled: true}),
      estadoPais: new FormControl({value: '', disabled: true}),
    });
    const rutaActiva$ = this.activatedRouteService.params;
    rutaActiva$
      .subscribe(
        (parametros) => {
          const pais$ = this.paisService.findOneById(parametros.id);
          pais$.subscribe(
            (obj: PaisDto) => {
              const paisGet: PaisDto = obj;
              if (!paisGet) {
                this.alertService.mensajeError(' Pais no encontrado!');
              }else{
                this.id = paisGet.id;
                this.formularioFormGroup.get('nombrePais').setValue(obj.paisNombre);
                this.formularioFormGroup.get('fechaPais').setValue(this.utilitarioService.getDateString(obj.fechaHoraActualizacion.toString()));
                this.formularioFormGroup.get('idPais').setValue(obj.id);
                this.formularioFormGroup.get('estadoPais').setValue(this.utilitarioService.returnEstadoEntity(obj.estado));
              }
            },
            error1 => this.alertService.mensajeError(AppConstantMessaga.MENSAJE_ERROR_CONEXION_SERVIDOR)
          );
        }
      );
  }

  onClickActualizar(valuesForm: any) {
    if (this.formularioFormGroup.valid) {
      const newPais = {} as PaisUpdateDto;
      newPais.paisNombre = valuesForm.nombrePais;
      newPais.id = this.id;
      const evento$ = this.paisService.updateOneById(newPais);
      evento$.subscribe(
        (even) => {
          this.alertService.toastSuccess(AppConstantMessaga.MENSAGE_ACTUALIAZCION_CORRECTO);
          this.routerService.navigate((['/pais']));
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
