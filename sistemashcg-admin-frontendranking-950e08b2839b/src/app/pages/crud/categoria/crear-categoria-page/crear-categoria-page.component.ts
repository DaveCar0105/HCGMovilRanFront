import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AlertService } from 'src/app/services/alert.service';
import { CategoriaService } from 'src/app/services/rest/categoria.service';
import { Router } from '@angular/router';
import { CategoriaCreateDto } from 'src/app/dtos/categoria.dto';
import { AppConstantMessaga } from 'src/app/app.constant';

@Component({
  selector: 'app-crear-categoria-page',
  templateUrl: './crear-categoria-page.component.html',
  styleUrls: ['./crear-categoria-page.component.css']
})
export class CrearCategoriaPageComponent implements OnInit {

  formularioFormGroup: FormGroup;
  constructor(
    private fb: FormBuilder,
    private readonly alertService: AlertService,
    private readonly categoriaService: CategoriaService,
    private readonly routerService: Router,
  ) {
    this.formularioFormGroup = this.fb.group({
      nombreCategoria: new FormControl('', Validators.required),
    });
   }

  ngOnInit(): void {
  }

  onClickGuardar(valuesForm: any) {
    if (this.formularioFormGroup.valid) {
      const newCategoria = {} as CategoriaCreateDto;
      newCategoria.categoriaNombre = valuesForm.nombreCategoria;
      const evento$ = this.categoriaService.create(newCategoria);
      evento$.subscribe(
        (even) => {
          this.alertService.toastSuccess(AppConstantMessaga.MENSAGE_CREADO_CORRECTO);
          this.routerService.navigate((['/categoria']));
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
