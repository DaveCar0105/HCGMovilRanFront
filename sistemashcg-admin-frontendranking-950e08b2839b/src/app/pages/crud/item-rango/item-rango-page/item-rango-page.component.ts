import { Component, OnInit } from '@angular/core';
import { ItemRangoDto, ItemRangoCreateDto } from 'src/app/dtos/item-rango.dto';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AlertService } from 'src/app/services/alert.service';
import { ItemService } from 'src/app/services/rest/item.service';
import { ItemRangoService } from 'src/app/services/rest/item-rango.service';
import { Router } from '@angular/router';
import { RangoService } from 'src/app/services/rest/rango.service';
import { AppConstantMessaga } from 'src/app/app.constant';
import { ItemDto } from 'src/app/dtos/item.dto';
import { RangoDto } from 'src/app/dtos/rango.dto';

@Component({
  selector: 'app-item-rango-page',
  templateUrl: './item-rango-page.component.html',
  styleUrls: ['./item-rango-page.component.css']
})
export class ItemRangoPageComponent implements OnInit {

  formularioFormGroup: FormGroup;
  itemsSaveWithRange: ItemDto[];
  items: ItemDto[];
  rangos: RangoDto[];
  idItemSelected: number | string;
  idRangoSelected: number | string;
  constructor(
    private fb: FormBuilder,
    private readonly alertService: AlertService,
    private readonly itemRangoService: ItemRangoService,
    private readonly itemService: ItemService,
    private readonly rangoService: RangoService,
    private readonly routerService: Router,
  ) {
    this.formularioFormGroup = this.fb.group({
      orden: new FormControl('', Validators.required),
      nombreItem: new FormControl('', Validators.required),
      nombreRango: new FormControl('', Validators.required),
    });
   }

  ngOnInit(): void {
    this.itemsSaveWithRange = [];
    this.items = [];
    this.rangos = [];
    const items$ = this.itemService.findAllWithRango();
    items$.subscribe(
      (obj) => {
        this.itemsSaveWithRange = obj.filter( a => a.itemsRango.length>0);
        console.log(this.itemsSaveWithRange);
        if (this.itemsSaveWithRange.length < 1 ) {
          this.alertService.mensajeInfo('No existen items con rango registrados');
        }
      },
      error1 => this.alertService.mensajeError(AppConstantMessaga.MENSAJE_ERROR_CONEXION_SERVIDOR)
    );
    const itemsLoad$ = this.itemService.findAll();
    itemsLoad$.subscribe(
      (obj) => {
        this.items = obj;
      },
      error1 => this.alertService.mensajeError(AppConstantMessaga.MENSAJE_ERROR_CONEXION_SERVIDOR)
    );
    const rangosLoad$ = this.rangoService.findAll();
    rangosLoad$.subscribe(
      (obj) => {
        this.rangos = obj;
      },
      error1 => this.alertService.mensajeError(AppConstantMessaga.MENSAJE_ERROR_CONEXION_SERVIDOR)
    );
  }

  onClickGuardar(valuesForm: any) {
    if (this.formularioFormGroup.valid && this.idItemSelected!=null && this.idRangoSelected!=null) {
      const newItemRango = {} as ItemRangoCreateDto;
      newItemRango.orden = valuesForm.orden;
      newItemRango.idItem = this.idItemSelected;
      newItemRango.idRango = this.idRangoSelected;
      const evento$ = this.itemRangoService.create(newItemRango);
      evento$.subscribe(
        (even) => {
          this.idRangoSelected = null;
          this.idItemSelected = null;
          this.formularioFormGroup.reset();
          this.alertService.toastSuccess(AppConstantMessaga.MENSAGE_CREADO_CORRECTO);
          this.routerService.navigate((['/item-rango']));
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

  getOrden(obj: ItemRangoDto){
    if (obj && obj!= undefined)
      return obj.orden;
    else
      return "";
  }

  getMinimo(obj: ItemRangoDto){
    if (obj && obj!= undefined && obj.rango!=null && obj.rango!=undefined)
      return obj.rango.minimo;
    else
      return "";
  }

  getMaximo(obj: ItemRangoDto){
    if (obj && obj!= undefined && obj.rango!=null && obj.rango!=undefined)
      return obj.rango.maximo;
    else
      return "";
  }

  getValor(obj: ItemRangoDto){
    if (obj && obj!= undefined && obj.rango!=null && obj.rango!=undefined)
      return obj.rango.cantidadDisminuir;
    else
      return "";
  }

  onSelectedRango() {
    if (this.formularioFormGroup.get('nombreRango')) {
      const rangoSelected = this.rangos
        .find(modelo => modelo.id + '-' + modelo.rangoNombre === this.formularioFormGroup.get('nombreRango').value);
        if (rangoSelected && rangoSelected !== undefined) {
          this.idRangoSelected = rangoSelected.id;
        }else {
          this.formularioFormGroup.get('nombreRango').setValue('');
          this.idRangoSelected = null;
        }
    }
  }

  onSelectedItem() {
    if (this.formularioFormGroup.get('nombreItem')) {
      const itemSelected = this.itemsSaveWithRange
        .find(modelo => modelo.id + '-' + modelo.itemNombre === this.formularioFormGroup.get('nombreItem').value);
        if (itemSelected && itemSelected !== undefined) {
          this.idItemSelected = itemSelected.id;
        }else {
          this.formularioFormGroup.get('nombreItem').setValue('');
          this.idItemSelected = null;
        }
    }
  }

  onClickEliminarItem(id: number | string) {/*
    const indice = this.itemsRango.findIndex(it => it.id === id);
    this.itemsRango.splice(indice, 1);*/
  }

}
