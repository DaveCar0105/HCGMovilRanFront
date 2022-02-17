import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AlertService } from 'src/app/services/alert.service';
import { ProductoService } from 'src/app/services/rest/producto.service';
import { Router } from '@angular/router';
import { ProductoCreateDto } from 'src/app/dtos/producto.dto';
import { AppConstantMessaga } from 'src/app/app.constant';

@Component({
  selector: 'app-crear-producto-page',
  templateUrl: './crear-producto-page.component.html',
  styleUrls: ['./crear-producto-page.component.css']
})
export class CrearProductoPageComponent implements OnInit {

  formularioFormGroup: FormGroup;
  constructor(
    private fb: FormBuilder,
    private readonly alertService: AlertService,
    private readonly productoService: ProductoService,
    private readonly routerService: Router,
  ) {
    this.formularioFormGroup = this.fb.group({
      nombreProducto: new FormControl('', Validators.required),
    });
   }

  ngOnInit(): void {
  }

  onClickGuardar(valuesForm: any) {
    if (this.formularioFormGroup.valid) {
      const newProducto = {} as ProductoCreateDto;
      newProducto.productoNombre = valuesForm.nombreProducto;
      const evento$ = this.productoService.create(newProducto);
      evento$.subscribe(
        (even) => {
          this.alertService.toastSuccess(AppConstantMessaga.MENSAGE_CREADO_CORRECTO);
          this.routerService.navigate((['/producto']));
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

}
