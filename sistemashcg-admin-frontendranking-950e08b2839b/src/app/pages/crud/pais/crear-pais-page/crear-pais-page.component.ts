import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AlertService } from 'src/app/services/alert.service';
import { PaisService } from 'src/app/services/rest/pais.service';
import { Router } from '@angular/router';
import { PaisCreateDto } from 'src/app/dtos/pais.dto';
import { AppConstantMessaga } from 'src/app/app.constant';

@Component({
  selector: 'app-crear-pais-page',
  templateUrl: './crear-pais-page.component.html',
  styleUrls: ['./crear-pais-page.component.css']
})
export class CrearPaisPageComponent implements OnInit {

  formularioFormGroup: FormGroup;
  constructor(
    private fb: FormBuilder,
    private readonly alertService: AlertService,
    private readonly paisService: PaisService,
    private readonly routerService: Router,
  ) {
    this.formularioFormGroup = this.fb.group({
      nombrePais: new FormControl('', Validators.required),
    });
   }

  ngOnInit(): void {
  }

  onClickGuardar(valuesForm: any) {
    if (this.formularioFormGroup.valid) {
      const newPais = {} as PaisCreateDto;
      newPais.paisNombre = valuesForm.nombrePais;
      const evento$ = this.paisService.create(newPais);
      evento$.subscribe(
        (even) => {
          this.alertService.toastSuccess(AppConstantMessaga.MENSAGE_CREADO_CORRECTO);
          this.routerService.navigate((['/pais']));
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
