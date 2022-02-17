import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AlertService } from 'src/app/services/alert.service';
import { SubcategoriaService } from 'src/app/services/rest/subcategoria.service';
import { CategoriaService } from 'src/app/services/rest/categoria.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UtilitarioService } from 'src/app/services/utilitario.service';
import { SubcategoriaDto, SubcategoriaUpdateDto } from 'src/app/dtos/subcategoria.dto';
import { AppConstantMessaga } from 'src/app/app.constant';

@Component({
  selector: 'app-editar-subcategoria-page',
  templateUrl: './editar-subcategoria-page.component.html',
  styleUrls: ['./editar-subcategoria-page.component.css']
})
export class EditarSubcategoriaPageComponent implements OnInit {

  formularioFormGroup: FormGroup;
  id: number| string;
  constructor(
    private fb: FormBuilder,
    private readonly alertService: AlertService,
    private readonly subcategoriaService: SubcategoriaService,
    private readonly categoriaService: CategoriaService,
    private readonly routerService: Router,
    private readonly activatedRouteService: ActivatedRoute,
    private readonly utilitarioService: UtilitarioService
  ) { }

  ngOnInit(): void {
    this.formularioFormGroup = this.fb.group({
      nombreSubcategoria: new FormControl('', Validators.required),
      idSubcategoria: new FormControl({value: '', disabled: true}),
      fechaSubcategoria: new FormControl({value: '', disabled: true}),
      estadoSubcategoria: new FormControl({value: '', disabled: true}),
    });
    const rutaActiva$ = this.activatedRouteService.params;
    rutaActiva$
      .subscribe(
        (parametros) => {
          const subcategoria$ = this.subcategoriaService.findOneById(parametros.id);
          subcategoria$.subscribe(
            (obj: SubcategoriaDto) => {
              const subcategoriaGet: SubcategoriaDto = obj;
              if (!subcategoriaGet) {
                this.alertService.mensajeError(' Subcategoria no encontrado!');
              }else{
                this.id = subcategoriaGet.id;
                this.formularioFormGroup.get('nombreSubcategoria').setValue(obj.subcategoriaNombre);
                this.formularioFormGroup.get('fechaSubcategoria').setValue(this.utilitarioService.getDateString(obj.fechaHoraActualizacion.toString()));
                this.formularioFormGroup.get('idSubcategoria').setValue(obj.id);
                this.formularioFormGroup.get('estadoSubcategoria').setValue(this.utilitarioService.returnEstadoEntity(obj.estado));
              }
            },
            error1 => this.alertService.mensajeError(AppConstantMessaga.MENSAJE_ERROR_CONEXION_SERVIDOR)
          );
        }
      );
  }

  onClickActualizar(valuesForm: any) {
    if (this.formularioFormGroup.valid) {
      const newSubcategoria = {} as SubcategoriaUpdateDto;
      newSubcategoria.subcategoriaNombre = valuesForm.nombreSubcategoria;
      newSubcategoria.id = this.id;
      const evento$ = this.subcategoriaService.updateOneById(newSubcategoria);
      evento$.subscribe(
        (even) => {
          this.alertService.toastSuccess(AppConstantMessaga.MENSAGE_ACTUALIAZCION_CORRECTO);
          this.routerService.navigate((['/subcategoria']));
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
