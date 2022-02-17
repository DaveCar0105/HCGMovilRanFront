import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AlertService } from 'src/app/services/alert.service';
import { PostcoschaService } from 'src/app/services/rest/postcoscha.service';
import { Router } from '@angular/router';
import { PostcosechaDto, PostcosechaCreateDto } from 'src/app/dtos/postcosecha.dto';
import { AppConstantMessaga } from 'src/app/app.constant';

@Component({
  selector: 'app-crear-postcosecha-page',
  templateUrl: './crear-postcosecha-page.component.html',
  styleUrls: ['./crear-postcosecha-page.component.css']
})
export class CrearPostcosechaPageComponent implements OnInit {

  formularioFormGroup: FormGroup;
  postcosechasPadre: PostcosechaDto[] = [];
  idPadre: number | string;
  constructor(
    private fb: FormBuilder,
    private readonly alertService: AlertService,
    private readonly postcosechaService: PostcoschaService,
    private readonly routerService: Router,
  ) {
    this.formularioFormGroup = this.fb.group({
      nombrePostcosecha: new FormControl('', Validators.required),
      nombrePadrePostcosecha: new FormControl(''),
    });
   }

  ngOnInit(): void {
    const postcosecha$ = this.postcosechaService.findAll();
    postcosecha$.subscribe(
      (obj) => {
        this.postcosechasPadre = obj.filter( a => a.idPostcosechaPadre==null);
        if (this.postcosechasPadre.length < 1) {
          this.alertService.mensajeInfo('No existen postcosechas padres registrados');
        }
      },
      error1 => this.alertService.mensajeError(AppConstantMessaga.MENSAJE_ERROR_CONEXION_SERVIDOR)
    );
  }

  onClickGuardar(valuesForm: any) {
    if (this.formularioFormGroup.valid) {
      const newPostcoscha = {} as PostcosechaCreateDto;
      newPostcoscha.postcosechaNombre = valuesForm.nombrePostcosecha;
      newPostcoscha.idPostcosechaPadre = this.idPadre;
      const evento$ = this.postcosechaService.create(newPostcoscha);
      evento$.subscribe(
        (even) => {
          this.alertService.toastSuccess(AppConstantMessaga.MENSAGE_CREADO_CORRECTO);
          this.routerService.navigate((['/postcosecha']));
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

  onSelectedPostcosecha() {
    if (this.formularioFormGroup.get('nombrePadrePostcosecha')) {
      const postcosechaSelected = this.postcosechasPadre
        .find(modelo => modelo.id + '-' + modelo.postcosechaNombre === this.formularioFormGroup.get('nombrePadrePostcosecha').value);
        if (postcosechaSelected && postcosechaSelected !== undefined) {
          this.idPadre = postcosechaSelected.id;
        }else {
          this.formularioFormGroup.get('nombrePadrePostcosecha').setValue('');
          this.idPadre = null;
        }
    }
  }

}
