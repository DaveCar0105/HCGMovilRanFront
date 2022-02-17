import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AlertService } from 'src/app/services/alert.service';
import { FormularioService } from 'src/app/services/rest/formulario.service';
import { Router } from '@angular/router';
import { FormularioCreateDto, FormularioDto } from 'src/app/dtos/formulario.dto';
import { AppConstantMessaga } from 'src/app/app.constant';
import { ItemService } from 'src/app/services/rest/item.service';
import { ItemDto } from 'src/app/dtos/item.dto';
import { SubcategoriaService } from 'src/app/services/rest/subcategoria.service';
import { SubcategoriaDto } from 'src/app/dtos/subcategoria.dto';
import { FormularioItemDto } from 'src/app/dtos/formulario-item.dto';

@Component({
  selector: 'app-crear-formulario-page',
  templateUrl: './crear-formulario-page.component.html',
  styleUrls: ['./crear-formulario-page.component.css']
})
export class CrearFormularioPageComponent implements OnInit {

  formularioFormGroup: FormGroup;
  detalleFormularioFormGroup: FormGroup;
  subcategorias: SubcategoriaDto[];
  items: ItemDto[];
  itemsSelected: ItemDto[];
  idItemSelected: number | string;
  constructor(
    private fb: FormBuilder,
    private readonly alertService: AlertService,
    private readonly fomularioService: FormularioService,
    private readonly subcategoriaService: SubcategoriaService,
    private readonly routerService: Router,
  ) {
    this.formularioFormGroup = this.fb.group({
      nombreFormulario: new FormControl('', Validators.required),
      nombreDesplazarFormulario: new FormControl('', Validators.required),
    });
    this.detalleFormularioFormGroup = this.fb.group({
      nombreSubcategoria: new FormControl('', Validators.required),
      nombreItem: new FormControl('', Validators.required),
    });
   }

  ngOnInit(): void {
    this.subcategorias = [];
    this.items = [];
    this.itemsSelected = [];
    const items$ = this.subcategoriaService.findAllByItems();
    items$.subscribe(
      (obj) => {
        this.subcategorias = obj;
        if (this.subcategorias.length < 1) {
          this.alertService.mensajeInfo('No existen subcategorias con items registrados');
        }
      },
      error1 => this.alertService.mensajeError(AppConstantMessaga.MENSAJE_ERROR_CONEXION_SERVIDOR)
    );
  }

  onClickGuardar(valuesForm: any) {
    if (this.formularioFormGroup.valid && this.itemsSelected.length >0) {
      const newFormulario = {} as FormularioCreateDto;
      newFormulario.formularioNombre = valuesForm.nombreFormulario;
      newFormulario.formularioNombreDesplazar = valuesForm.nombreDesplazarFormulario;
      newFormulario.formularioItems = this.formulariosItemsSelected();
      const evento$ = this.fomularioService.create(newFormulario);
      evento$.subscribe(
        (even) => {
          this.alertService.toastSuccess(AppConstantMessaga.MENSAGE_CREADO_CORRECTO);
          this.routerService.navigate((['/formulario']));
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

  onClickGuardarItem(valuesForm: any) {
    if (this.detalleFormularioFormGroup.valid && this.idItemSelected!=null) {
      const itemSelec = this.items.find(a => a.id == this.idItemSelected);
      this.itemsSelected.push(itemSelec);
      this.idItemSelected = null;
      this.detalleFormularioFormGroup.reset();
    } else {
      Object.keys(this.detalleFormularioFormGroup.controls).forEach(key => {
        this.detalleFormularioFormGroup.controls[key].markAsDirty();
      });
      this.alertService.mensajeError(AppConstantMessaga.MENSAGE_LLENAR_FORMULARIO);
    }
  }

  getSucategoria(id: number | String){
    if (this.subcategorias && this.subcategorias!= undefined && this.subcategorias.length>0){
       let subcategor = this.subcategorias.find(a => a.id == id);
       if (subcategor && subcategor!= undefined)
        return subcategor.subcategoriaNombre;
      else
        return "";
    }else
      return "";
  }

  formulariosItemsSelected(): FormularioItemDto[]{
    const formyItems: FormularioItemDto[] = [];
    for (const item of this.itemsSelected){
      const newFormItem = {} as FormularioItemDto;
      newFormItem.idItem = item.id;
      formyItems.push(newFormItem);
    }
    return formyItems;
  }

  onSelectedSubcategoria() {
    if (this.detalleFormularioFormGroup.get('nombreSubcategoria')) {
      const subcategoriaSelected = this.subcategorias
        .find(modelo => modelo.id + '-' + modelo.subcategoriaNombre === this.detalleFormularioFormGroup.get('nombreSubcategoria').value);
        if (subcategoriaSelected && subcategoriaSelected !== undefined) {
          this.items = subcategoriaSelected.items?? [];
          this.detalleFormularioFormGroup.get('nombreItem').setValue('');
          this.idItemSelected = null;
        }else {
          this.detalleFormularioFormGroup.get('nombreSubcategoria').setValue('');
          this.detalleFormularioFormGroup.get('nombreItem').setValue('');
          this.items = [];
          this.idItemSelected = null;
        }
    }
  }

  onSelectedItem() {
    if (this.detalleFormularioFormGroup.get('nombreItem')) {
      const itemSelected = this.items
        .find(modelo => modelo.id + '-' + modelo.itemNombre === this.detalleFormularioFormGroup.get('nombreItem').value);
        if (itemSelected && itemSelected !== undefined) {
          this.idItemSelected = itemSelected.id;
        }else {
          this.detalleFormularioFormGroup.get('nombreItem').setValue('');
          this.idItemSelected = null;
        }
    }
  }

  onClickEliminarItem(id: number | string) {
    const indice = this.itemsSelected.findIndex(it => it.id === id);
    this.itemsSelected.splice(indice, 1);
  }

}
