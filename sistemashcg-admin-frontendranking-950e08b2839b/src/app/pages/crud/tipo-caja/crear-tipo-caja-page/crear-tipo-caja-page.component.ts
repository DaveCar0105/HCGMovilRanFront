import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AlertService } from 'src/app/services/alert.service';
import { TipoCajaService } from 'src/app/services/rest/tipo-caja.service';
import { Router } from '@angular/router';
import { TipoCajaCreateDto } from 'src/app/dtos/tipo-caja.dto';
import { AppConstantMessaga } from 'src/app/app.constant';

@Component({
  selector: 'app-crear-tipo-caja-page',
  templateUrl: './crear-tipo-caja-page.component.html',
  styleUrls: ['./crear-tipo-caja-page.component.css']
})
export class CrearTipoCajaPageComponent implements OnInit {

  formularioFormGroup: FormGroup;
  constructor(
    private fb: FormBuilder,
    private readonly alertService: AlertService,
    private readonly tipoCajaService: TipoCajaService,
    private readonly routerService: Router,
  ) {
    this.formularioFormGroup = this.fb.group({
      nombreTipoCaja: new FormControl('', Validators.required),
    });
   }

  ngOnInit(): void {
  }

  onClickGuardar(valuesForm: any) {
    if (this.formularioFormGroup.valid) {
      const newTipoCaja = {} as TipoCajaCreateDto;
      newTipoCaja.tipoCajaNombre = valuesForm.nombreTipoCaja;
      const evento$ = this.tipoCajaService.create(newTipoCaja);
      evento$.subscribe(
        (even) => {
          this.alertService.toastSuccess(AppConstantMessaga.MENSAGE_CREADO_CORRECTO);
          this.routerService.navigate((['/tipo-caja']));
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
