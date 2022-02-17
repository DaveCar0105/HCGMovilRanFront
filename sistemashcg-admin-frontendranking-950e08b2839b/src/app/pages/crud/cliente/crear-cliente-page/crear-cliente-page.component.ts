import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AlertService } from 'src/app/services/alert.service';
import { ClienteService } from 'src/app/services/rest/cliente.service';
import { Router } from '@angular/router';
import { ClienteCreateDto } from 'src/app/dtos/cliente.dto';
import { AppConstantMessaga } from 'src/app/app.constant';

@Component({
  selector: 'app-crear-cliente-page',
  templateUrl: './crear-cliente-page.component.html',
  styleUrls: ['./crear-cliente-page.component.css']
})
export class CrearClientePageComponent implements OnInit {

  formularioFormGroup: FormGroup;
  constructor(
    private fb: FormBuilder,
    private readonly alertService: AlertService,
    private readonly clienteService: ClienteService,
    private readonly routerService: Router,
  ) { 
    this.formularioFormGroup = this.fb.group({
      nombreCliente: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
  }

  onClickGuardar(valuesForm: any) {
    if (this.formularioFormGroup.valid) {
      const newCliente = {} as ClienteCreateDto;
      newCliente.clienteNombre = valuesForm.nombreCliente;
      const evento$ = this.clienteService.create(newCliente);
      evento$.subscribe(
        (even) => {
          this.alertService.toastSuccess(AppConstantMessaga.MENSAGE_CREADO_CORRECTO);
          this.routerService.navigate((['/cliente']));
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
