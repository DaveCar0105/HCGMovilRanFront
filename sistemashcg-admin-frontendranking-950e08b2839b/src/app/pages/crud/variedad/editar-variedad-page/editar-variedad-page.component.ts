import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AlertService } from 'src/app/services/alert.service';
import { VariedadService } from 'src/app/services/rest/variedad.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UtilitarioService } from 'src/app/services/utilitario.service';
import { ProductoService } from 'src/app/services/rest/producto.service';
import { VariedadDto, VariedadUpdateDto } from 'src/app/dtos/variedad.dto';
import { AppConstantMessaga } from 'src/app/app.constant';

@Component({
  selector: 'app-editar-variedad-page',
  templateUrl: './editar-variedad-page.component.html',
  styleUrls: ['./editar-variedad-page.component.css']
})
export class EditarVariedadPageComponent implements OnInit {

  formularioFormGroup: FormGroup;
  id: number| string;
  constructor(
    private fb: FormBuilder,
    private readonly alertService: AlertService,
    private readonly variedadService: VariedadService,
    private readonly productoService: ProductoService,
    private readonly routerService: Router,
    private readonly activatedRouteService: ActivatedRoute,
    private readonly utilitarioService: UtilitarioService
  ) { }

  ngOnInit(): void {
    this.formularioFormGroup = this.fb.group({
      nombreVariedad: new FormControl('', Validators.required),
      idVariedad: new FormControl({value: '', disabled: true}),
      fechaVariedad: new FormControl({value: '', disabled: true}),
      estadoVariedad: new FormControl({value: '', disabled: true}),
    });
    const rutaActiva$ = this.activatedRouteService.params;
    rutaActiva$
      .subscribe(
        (parametros) => {
          const variedad$ = this.variedadService.findOneById(parametros.id);
          variedad$.subscribe(
            (obj: VariedadDto) => {
              const variedadGet: VariedadDto = obj;
              if (!variedadGet) {
                this.alertService.mensajeError(' Variedad no encontrado!');
              }else{
                this.id = variedadGet.id;
                this.formularioFormGroup.get('nombreVariedad').setValue(obj.variedadNombre);
                this.formularioFormGroup.get('fechaVariedad').setValue(this.utilitarioService.getDateString(obj.fechaHoraActualizacion.toString()));
                this.formularioFormGroup.get('idVariedad').setValue(obj.id);
                this.formularioFormGroup.get('estadoVariedad').setValue(this.utilitarioService.returnEstadoEntity(obj.estado));
              }
            },
            error1 => this.alertService.mensajeError(AppConstantMessaga.MENSAJE_ERROR_CONEXION_SERVIDOR)
          );
        }
      );
  }

  onClickActualizar(valuesForm: any) {
    if (this.formularioFormGroup.valid) {
      const newVariedad = {} as VariedadUpdateDto;
      newVariedad.variedadNombre = valuesForm.nombreVariedad;
      newVariedad.id = this.id;
      const evento$ = this.variedadService.updateOneById(newVariedad);
      evento$.subscribe(
        (even) => {
          this.alertService.toastSuccess(AppConstantMessaga.MENSAGE_ACTUALIAZCION_CORRECTO);
          this.routerService.navigate((['/variedad']));
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
