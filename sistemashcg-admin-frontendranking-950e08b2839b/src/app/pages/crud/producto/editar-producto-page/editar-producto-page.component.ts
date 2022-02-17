import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AlertService } from 'src/app/services/alert.service';
import { ProductoService } from 'src/app/services/rest/producto.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UtilitarioService } from 'src/app/services/utilitario.service';
import { ProductoDto, ProductoUpdateDto } from 'src/app/dtos/producto.dto';
import { AppConstantMessaga } from 'src/app/app.constant';

@Component({
  selector: 'app-editar-producto-page',
  templateUrl: './editar-producto-page.component.html',
  styleUrls: ['./editar-producto-page.component.css']
})
export class EditarProductoPageComponent implements OnInit {

  formularioFormGroup: FormGroup;
  id: number| string;
  constructor(
    private fb: FormBuilder,
    private readonly alertService: AlertService,
    private readonly productoService: ProductoService,
    private readonly routerService: Router,
    private readonly activatedRouteService: ActivatedRoute,
    private readonly utilitarioService: UtilitarioService
  ) { }

  ngOnInit(): void {
    this.formularioFormGroup = this.fb.group({
      nombreProducto: new FormControl('', Validators.required),
      idProducto: new FormControl({value: '', disabled: true}),
      fechaProducto: new FormControl({value: '', disabled: true}),
      estadoProducto: new FormControl({value: '', disabled: true}),
    });
    const rutaActiva$ = this.activatedRouteService.params;
    rutaActiva$
      .subscribe(
        (parametros) => {
          const producto$ = this.productoService.findOneById(parametros.id);
          producto$.subscribe(
            (obj: ProductoDto) => {
              const productoGet: ProductoDto = obj;
              if (!productoGet) {
                this.alertService.mensajeError(' Producto no encontrado!');
              }else{
                this.id = productoGet.id;
                this.formularioFormGroup.get('nombreProducto').setValue(obj.productoNombre);
                this.formularioFormGroup.get('fechaProducto').setValue(this.utilitarioService.getDateString(obj.fechaHoraActualizacion.toString()));
                this.formularioFormGroup.get('idProducto').setValue(obj.id);
                this.formularioFormGroup.get('estadoProducto').setValue(this.utilitarioService.returnEstadoEntity(obj.estado));
              }
            },
            error1 => this.alertService.mensajeError(AppConstantMessaga.MENSAJE_ERROR_CONEXION_SERVIDOR)
          );
        }
      );
  }

  onClickActualizar(valuesForm: any) {
    if (this.formularioFormGroup.valid) {
      const newProducto = {} as ProductoUpdateDto;
      newProducto.productoNombre = valuesForm.nombreProducto;
      newProducto.id = this.id;
      const evento$ = this.productoService.updateOneById(newProducto);
      evento$.subscribe(
        (even) => {
          this.alertService.toastSuccess(AppConstantMessaga.MENSAGE_ACTUALIAZCION_CORRECTO);
          this.routerService.navigate((['/producto']));
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
