import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AlertService } from 'src/app/services/alert.service';
import { RangoService } from 'src/app/services/rest/rango.service';
import { Router } from '@angular/router';
import { RangoCreateDto } from 'src/app/dtos/rango.dto';
import { AppConstantMessaga } from 'src/app/app.constant';

@Component({
  selector: 'app-crear-rango-page',
  templateUrl: './crear-rango-page.component.html',
  styleUrls: ['./crear-rango-page.component.css']
})
export class CrearRangoPageComponent implements OnInit {

  formularioFormGroup: FormGroup;
  constructor(
    private fb: FormBuilder,
    private readonly alertService: AlertService,
    private readonly rangoService: RangoService,
    private readonly routerService: Router,
  ) {
    this.formularioFormGroup = this.fb.group({
      nombreRango: new FormControl('', Validators.required),
      minimoRango: new FormControl('', [Validators.required, Validators.pattern("^[0-9]+(.[0-9]{0,2})?$")]),
      maximoRango: new FormControl('', [Validators.required, Validators.pattern("^[0-9]+(.[0-9]{0,2})?$")]),
      cantidadRango: new FormControl('', [Validators.required, Validators.pattern("^[0-9]+(.[0-9]{0,2})?$")]),
    });
   }

  ngOnInit(): void {
  }

  onClickGuardar(valuesForm: any) {
    if (this.formularioFormGroup.valid) {
      const newRango = {} as RangoCreateDto;
      newRango.rangoNombre = valuesForm.nombreRango;
      newRango.minimo = valuesForm.minimoRango;
      newRango.maximo = valuesForm.maximoRango;
      newRango.cantidadDisminuir = valuesForm.cantidadRango;
      const evento$ = this.rangoService.create(newRango);
      evento$.subscribe(
        (even) => {
          this.alertService.toastSuccess(AppConstantMessaga.MENSAGE_CREADO_CORRECTO);
          this.routerService.navigate((['/rango']));
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
