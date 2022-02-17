import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AlertService } from 'src/app/services/alert.service';
import { CargueraService } from 'src/app/services/rest/carguera.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CargueraUpdateDto, CargueraDto, CargueraCreateDto } from 'src/app/dtos/carguera.dto';
import { AppConstantMessaga } from 'src/app/app.constant';
import { UtilitarioService } from 'src/app/services/utilitario.service';

@Component({
  selector: 'app-editar-carguera-page',
  templateUrl: './editar-carguera-page.component.html',
  styleUrls: ['./editar-carguera-page.component.css']
})
export class EditarCargueraPageComponent implements OnInit {

  formularioFormGroup: FormGroup;
  id: number| string;
  constructor(
    private fb: FormBuilder,
    private readonly alertService: AlertService,
    private readonly cargueraService: CargueraService,
    private readonly routerService: Router,
    private readonly activatedRouteService: ActivatedRoute,
    private readonly utilitarioService: UtilitarioService
  ) { }

  ngOnInit(): void {
    this.formularioFormGroup = this.fb.group({
      nombreCarguera: new FormControl('', Validators.required),
      idCarguera: new FormControl({value: '', disabled: true}),
      fechaCarguera: new FormControl({value: '', disabled: true}),
      estadoCarguera: new FormControl({value: '', disabled: true}),
    });
    const rutaActiva$ = this.activatedRouteService.params;
    rutaActiva$
      .subscribe(
        (parametros) => {
          const cliente$ = this.cargueraService.findOneById(parametros.id);
          cliente$.subscribe(
            (obj: CargueraDto) => {
              const cargueraGet: CargueraDto = obj;
              if (!cargueraGet) {
                this.alertService.mensajeError(' Carguera no encontrado!');
              }else{
                this.id = cargueraGet.id;
                this.formularioFormGroup.get('nombreCarguera').setValue(obj.cargueraNombre);
                this.formularioFormGroup.get('fechaCarguera').setValue(this.utilitarioService.getDateString(obj.fechaHoraActualizacion.toString()));
                this.formularioFormGroup.get('idCarguera').setValue(obj.id);
                this.formularioFormGroup.get('estadoCarguera').setValue(this.utilitarioService.returnEstadoEntity(obj.estado));
              }
            },
            error1 => this.alertService.mensajeError(AppConstantMessaga.MENSAJE_ERROR_CONEXION_SERVIDOR)
          );
        }
      );
  }

  onClickActualizar(valuesForm: any) {
    if (this.formularioFormGroup.valid) {
      const newCarguera = {} as CargueraUpdateDto;
      newCarguera.cargueraNombre = valuesForm.nombreCarguera;
      newCarguera.id = this.id;
      const evento$ = this.cargueraService.updateOneById(newCarguera);
      evento$.subscribe(
        (even) => {
          this.alertService.toastSuccess(AppConstantMessaga.MENSAGE_ACTUALIAZCION_CORRECTO);
          this.routerService.navigate((['/carguera']));
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
