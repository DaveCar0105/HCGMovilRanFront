import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { SubcategoriaDto } from 'src/app/dtos/subcategoria.dto';
import { AlertService } from 'src/app/services/alert.service';
import { SubcategoriaService } from 'src/app/services/rest/subcategoria.service';
import { ItemService } from 'src/app/services/rest/item.service';
import { Router } from '@angular/router';
import { AppConstantMessaga } from 'src/app/app.constant';
import { ItemCreateDto } from 'src/app/dtos/item.dto';

@Component({
  selector: 'app-crear-item-page',
  templateUrl: './crear-item-page.component.html',
  styleUrls: ['./crear-item-page.component.css']
})
export class CrearItemPageComponent implements OnInit {

  formularioFormGroup: FormGroup;
  subcategorias: SubcategoriaDto[] = [];
  idSubcategoria: number | string;
  constructor(
    private fb: FormBuilder,
    private readonly alertService: AlertService,
    private readonly subcategoriaService: SubcategoriaService,
    private readonly itemService: ItemService,
    private readonly routerService: Router,
  ) {
    this.formularioFormGroup = this.fb.group({
      nombreItem: new FormControl('', Validators.required),
      nombreSubcategoria: new FormControl('', Validators.required),
    });
   }

  ngOnInit(): void {
    const subcategorias$ = this.subcategoriaService.findAll();
    subcategorias$.subscribe(
      (obj) => {
        this.subcategorias = obj;
        if (this.subcategorias.length < 1) {
          this.alertService.mensajeInfo('No existen subcategorias registrados');
        }
      },
      error1 => this.alertService.mensajeError(AppConstantMessaga.MENSAJE_ERROR_CONEXION_SERVIDOR)
    );
  }

  onClickGuardar(valuesForm: any) {
    if (this.formularioFormGroup.valid) {
      const newItem = {} as ItemCreateDto;
      newItem.itemNombre = valuesForm.nombreItem;
      newItem.idSubcategoria = this.idSubcategoria;
      const evento$ = this.itemService.create(newItem);
      evento$.subscribe(
        (even) => {
          this.alertService.toastSuccess(AppConstantMessaga.MENSAGE_CREADO_CORRECTO);
          this.routerService.navigate((['/item']));
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

  onSelectedSubcategoria() {
    if (this.formularioFormGroup.get('nombreSubcategoria')) {
      const subcategoriaSelected = this.subcategorias
        .find(modelo => modelo.id + '-' + modelo.subcategoriaNombre === this.formularioFormGroup.get('nombreSubcategoria').value);
        if (subcategoriaSelected && subcategoriaSelected !== undefined) {
          this.idSubcategoria = subcategoriaSelected.id;
        }else {
          this.formularioFormGroup.get('nombreSubcategoria').setValue('');
          this.idSubcategoria = null;
        }
    }
  }

}
