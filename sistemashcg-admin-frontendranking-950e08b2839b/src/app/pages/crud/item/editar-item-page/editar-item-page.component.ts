import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AlertService } from 'src/app/services/alert.service';
import { ItemService } from 'src/app/services/rest/item.service';
import { SubcategoriaService } from 'src/app/services/rest/subcategoria.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UtilitarioService } from 'src/app/services/utilitario.service';
import { ItemDto } from 'src/app/dtos/item.dto';
import { AppConstantMessaga } from 'src/app/app.constant';

@Component({
  selector: 'app-editar-item-page',
  templateUrl: './editar-item-page.component.html',
  styleUrls: ['./editar-item-page.component.css']
})
export class EditarItemPageComponent implements OnInit {

  formularioFormGroup: FormGroup;
  id: number| string;
  constructor(
    private fb: FormBuilder,
    private readonly alertService: AlertService,
    private readonly itemService: ItemService,
    private readonly subcategoriaService: SubcategoriaService,
    private readonly routerService: Router,
    private readonly activatedRouteService: ActivatedRoute,
    private readonly utilitarioService: UtilitarioService
  ) { }

  ngOnInit(): void {
    this.formularioFormGroup = this.fb.group({
      nombreItem: new FormControl('', Validators.required),
      idItem: new FormControl({value: '', disabled: true}),
      fechaItem: new FormControl({value: '', disabled: true}),
      estadoItem: new FormControl({value: '', disabled: true}),
    });
    const rutaActiva$ = this.activatedRouteService.params;
    rutaActiva$
      .subscribe(
        (parametros) => {
          const item$ = this.itemService.findOneById(parametros.id);
          item$.subscribe(
            (obj: ItemDto) => {
              const itemGet: ItemDto = obj;
              if (!itemGet) {
                this.alertService.mensajeError(' Item no encontrado!');
              }else{
                this.id = itemGet.id;
                this.formularioFormGroup.get('nombreItem').setValue(obj.itemNombre);
                this.formularioFormGroup.get('fechaItem').setValue(this.utilitarioService.getDateString(obj.fechaHoraActualizacion.toString()));
                this.formularioFormGroup.get('idItem').setValue(obj.id);
                this.formularioFormGroup.get('estadoItem').setValue(this.utilitarioService.returnEstadoEntity(obj.estado));
              }
            },
            error1 => this.alertService.mensajeError(AppConstantMessaga.MENSAJE_ERROR_CONEXION_SERVIDOR)
          );
        }
      );
  }

  onClickActualizar(valuesForm: any) {
    if (this.formularioFormGroup.valid) {
      const newItem = {} as ItemDto;
      newItem.itemNombre = valuesForm.nombreItem;
      newItem.id = this.id;
      const evento$ = this.itemService.updateOneById(newItem);
      evento$.subscribe(
        (even) => {
          this.alertService.toastSuccess(AppConstantMessaga.MENSAGE_ACTUALIAZCION_CORRECTO);
          this.routerService.navigate((['/item']));
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
