import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AlertService } from 'src/app/services/alert.service';
import { CategoriaService } from 'src/app/services/rest/categoria.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UtilitarioService } from 'src/app/services/utilitario.service';
import { CategoriaDto, CategoriaUpdateDto } from 'src/app/dtos/categoria.dto';
import { AppConstantMessaga } from 'src/app/app.constant';

@Component({
  selector: 'app-editar-categoria-page',
  templateUrl: './editar-categoria-page.component.html',
  styleUrls: ['./editar-categoria-page.component.css']
})
export class EditarCategoriaPageComponent implements OnInit {

  formularioFormGroup: FormGroup;
  id: number| string;
  constructor(
    private fb: FormBuilder,
    private readonly alertService: AlertService,
    private readonly categoriaService: CategoriaService,
    private readonly routerService: Router,
    private readonly activatedRouteService: ActivatedRoute,
    private readonly utilitarioService: UtilitarioService
  ) { }

  ngOnInit(): void {
    this.formularioFormGroup = this.fb.group({
      nombreCategoria: new FormControl('', Validators.required),
      idCategoria: new FormControl({value: '', disabled: true}),
      fechaCategoria: new FormControl({value: '', disabled: true}),
      estadoCategoria: new FormControl({value: '', disabled: true}),
    });
    const rutaActiva$ = this.activatedRouteService.params;
    rutaActiva$
      .subscribe(
        (parametros) => {
          const categoria$ = this.categoriaService.findOneById(parametros.id);
          categoria$.subscribe(
            (obj: CategoriaDto) => {
              const categoriaGet: CategoriaDto = obj;
              if (!categoriaGet) {
                this.alertService.mensajeError(' Categoria no encontrado!');
              }else{
                this.id = categoriaGet.id;
                this.formularioFormGroup.get('nombreCategoria').setValue(obj.categoriaNombre);
                this.formularioFormGroup.get('fechaCategoria').setValue(this.utilitarioService.getDateString(obj.fechaHoraActualizacion.toString()));
                this.formularioFormGroup.get('idCategoria').setValue(obj.id);
                this.formularioFormGroup.get('estadoCategoria').setValue(this.utilitarioService.returnEstadoEntity(obj.estado));
              }
            },
            error1 => this.alertService.mensajeError(AppConstantMessaga.MENSAJE_ERROR_CONEXION_SERVIDOR)
          );
        }
      );
  }

  onClickActualizar(valuesForm: any) {
    if (this.formularioFormGroup.valid) {
      const newCategoria = {} as CategoriaUpdateDto;
      newCategoria.categoriaNombre = valuesForm.nombreCategoria;
      newCategoria.id = this.id;
      const evento$ = this.categoriaService.updateOneById(newCategoria);
      evento$.subscribe(
        (even) => {
          this.alertService.toastSuccess(AppConstantMessaga.MENSAGE_ACTUALIAZCION_CORRECTO);
          this.routerService.navigate((['/categoria']));
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
