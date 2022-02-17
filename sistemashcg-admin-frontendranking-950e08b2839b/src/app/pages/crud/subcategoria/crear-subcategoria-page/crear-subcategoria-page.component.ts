import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { CategoriaDto } from 'src/app/dtos/categoria.dto';
import { AlertService } from 'src/app/services/alert.service';
import { CategoriaService } from 'src/app/services/rest/categoria.service';
import { SubcategoriaService } from 'src/app/services/rest/subcategoria.service';
import { Router } from '@angular/router';
import { AppConstantMessaga } from 'src/app/app.constant';
import { SubcategoriaCreateDto } from 'src/app/dtos/subcategoria.dto';

@Component({
  selector: 'app-crear-subcategoria-page',
  templateUrl: './crear-subcategoria-page.component.html',
  styleUrls: ['./crear-subcategoria-page.component.css']
})
export class CrearSubcategoriaPageComponent implements OnInit {

  formularioFormGroup: FormGroup;
  categorias: CategoriaDto[] = [];
  idCategoria: number | string;
  constructor(
    private fb: FormBuilder,
    private readonly alertService: AlertService,
    private readonly categoriaService: CategoriaService,
    private readonly subcategoriaService: SubcategoriaService,
    private readonly routerService: Router,
  ) {
    this.formularioFormGroup = this.fb.group({
      nombreSubcategoria: new FormControl('', Validators.required),
      nombreCategoria: new FormControl('', Validators.required),
    });
   }

  ngOnInit(): void {
    const categorias$ = this.categoriaService.findAll();
    categorias$.subscribe(
      (obj) => {
        this.categorias = obj;
        if (this.categorias.length < 1) {
          this.alertService.mensajeInfo('No existen categorias registrados');
        }
      },
      error1 => this.alertService.mensajeError(AppConstantMessaga.MENSAJE_ERROR_CONEXION_SERVIDOR)
    );
  }

  onClickGuardar(valuesForm: any) {
    if (this.formularioFormGroup.valid) {
      const newSubcategoria = {} as SubcategoriaCreateDto;
      newSubcategoria.subcategoriaNombre = valuesForm.nombreSubcategoria;
      newSubcategoria.idCategoria = this.idCategoria;
      const evento$ = this.subcategoriaService.create(newSubcategoria);
      evento$.subscribe(
        (even) => {
          this.alertService.toastSuccess(AppConstantMessaga.MENSAGE_CREADO_CORRECTO);
          this.routerService.navigate((['/subcategoria']));
        },
        (error) => this.alertService.mensajeError(AppConstantMessaga.MENSAGE_ERROR_CREAR)
      );
    } else {
      Object.keys(this.formularioFormGroup.controls).forEach(key => {
        this.formularioFormGroup.controls[key].markAsDirty();
      });
      this.alertService.mensajeError(AppConstantMessaga.MENSAGE_LLENAR_FORMULARIO);
    }
  }

  onSelectedCategoria() {
    if (this.formularioFormGroup.get('nombreCategoria')) {
      const categoriaSelected = this.categorias
        .find(modelo => modelo.id + '-' + modelo.categoriaNombre === this.formularioFormGroup.get('nombreCategoria').value);
        if (categoriaSelected && categoriaSelected !== undefined) {
          this.idCategoria = categoriaSelected.id;
        }else {
          this.formularioFormGroup.get('nombreCategoria').setValue('');
          this.idCategoria = null;
        }
    }
  }

}
