import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ProductoDto } from 'src/app/dtos/producto.dto';
import { AlertService } from 'src/app/services/alert.service';
import { ProductoService } from 'src/app/services/rest/producto.service';
import { Router } from '@angular/router';
import { VariedadService } from 'src/app/services/rest/variedad.service';
import { AppConstantMessaga } from 'src/app/app.constant';
import { VariedadCreateDto } from 'src/app/dtos/variedad.dto';

@Component({
  selector: 'app-crear-variedad-page',
  templateUrl: './crear-variedad-page.component.html',
  styleUrls: ['./crear-variedad-page.component.css']
})
export class CrearVariedadPageComponent implements OnInit {

  formularioFormGroup: FormGroup;
  productos: ProductoDto[] = [];
  idProducto: number | string;
  constructor(
    private fb: FormBuilder,
    private readonly alertService: AlertService,
    private readonly productoService: ProductoService,
    private readonly variedadService: VariedadService,
    private readonly routerService: Router,
  ) {
    this.formularioFormGroup = this.fb.group({
      nombreVariedad: new FormControl('', Validators.required),
      nombreProducto: new FormControl('', Validators.required),
    });
   }

  ngOnInit(): void {
    const productos$ = this.productoService.findAll();
    productos$.subscribe(
      (obj) => {
        this.productos = obj;
        if (this.productos.length < 1) {
          this.alertService.mensajeInfo('No existen productos registrados');
        }
      },
      error1 => this.alertService.mensajeError(AppConstantMessaga.MENSAJE_ERROR_CONEXION_SERVIDOR)
    );
  }

  onClickGuardar(valuesForm: any) {
    if (this.formularioFormGroup.valid) {
      const newVariedad = {} as VariedadCreateDto;
      newVariedad.variedadNombre = valuesForm.nombreVariedad;
      newVariedad.idProducto = this.idProducto;
      const evento$ = this.variedadService.create(newVariedad);
      evento$.subscribe(
        (even) => {
          this.alertService.toastSuccess(AppConstantMessaga.MENSAGE_CREADO_CORRECTO);
          this.routerService.navigate((['/variedad']));
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

  onSelectedProducto() {
    if (this.formularioFormGroup.get('nombreProducto')) {
      const productoSelected = this.productos
        .find(modelo => modelo.id + '-' + modelo.productoNombre === this.formularioFormGroup.get('nombreProducto').value);
        if (productoSelected && productoSelected !== undefined) {
          this.idProducto = productoSelected.id;
        }else {
          this.formularioFormGroup.get('nombreProducto').setValue('');
          this.idProducto = null;
        }
    }
  }

}
