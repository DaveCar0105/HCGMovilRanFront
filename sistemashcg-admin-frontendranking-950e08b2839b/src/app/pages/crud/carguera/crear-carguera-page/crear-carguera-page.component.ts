import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AlertService } from 'src/app/services/alert.service';
import { AppConstantMessaga } from 'src/app/app.constant';
import { CargueraService } from 'src/app/services/rest/carguera.service';
import { CargueraCreateDto } from 'src/app/dtos/carguera.dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-carguera-page',
  templateUrl: './crear-carguera-page.component.html',
  styleUrls: ['./crear-carguera-page.component.css']
})
export class CrearCargueraPageComponent implements OnInit {

  formularioFormGroup: FormGroup;
  constructor(
    private fb: FormBuilder,
    private readonly alertService: AlertService,
    private readonly cargueraService: CargueraService,
    private readonly routerService: Router,
  ) {
    this.formularioFormGroup = this.fb.group({
      nombreCarguera: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
  }

  onClickGuardar(valuesForm: any) {
    if (this.formularioFormGroup.valid) {
      const newCarguera = {} as CargueraCreateDto;
      newCarguera.cargueraNombre = valuesForm.nombreCarguera;
      const evento$ = this.cargueraService.create(newCarguera);
      evento$.subscribe(
        (even) => {
          this.alertService.toastSuccess(AppConstantMessaga.MENSAGE_CREADO_CORRECTO);
          this.routerService.navigate((['/carguera']));
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
