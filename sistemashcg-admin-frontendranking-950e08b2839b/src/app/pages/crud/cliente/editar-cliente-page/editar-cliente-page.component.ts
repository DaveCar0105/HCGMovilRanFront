import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AlertService } from 'src/app/services/alert.service';
import { ClienteService } from 'src/app/services/rest/cliente.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UtilitarioService } from 'src/app/services/utilitario.service';
import { ClienteDto, ClienteUpdateDto } from 'src/app/dtos/cliente.dto';
import { AppConstantMessaga } from 'src/app/app.constant';

@Component({
  selector: 'app-editar-cliente-page',
  templateUrl: './editar-cliente-page.component.html',
  styleUrls: ['./editar-cliente-page.component.css']
})
export class EditarClientePageComponent implements OnInit {

  formularioFormGroup: FormGroup;
  id: number| string;
  constructor(
    private fb: FormBuilder,
    private readonly alertService: AlertService,
    private readonly clienteService: ClienteService,
    private readonly routerService: Router,
    private readonly activatedRouteService: ActivatedRoute,
    private readonly utilitarioService: UtilitarioService
  ) { }

  ngOnInit(): void {
    this.formularioFormGroup = this.fb.group({
      nombreCliente: new FormControl('', Validators.required),
      idCliente: new FormControl({value: '', disabled: true}),
      fechaCliente: new FormControl({value: '', disabled: true}),
      estadoCliente: new FormControl({value: '', disabled: true}),
    });
    const rutaActiva$ = this.activatedRouteService.params;
    rutaActiva$
      .subscribe(
        (parametros) => {
          const cliente$ = this.clienteService.findOneById(parametros.id);
          cliente$.subscribe(
            (obj: ClienteDto) => {
              const clienteGet: ClienteDto = obj;
              if (!clienteGet) {
                this.alertService.mensajeError(' Cliente no encontrado!');
              }else{
                this.id = clienteGet.id;
                this.formularioFormGroup.get('nombreCliente').setValue(obj.clienteNombre);
                this.formularioFormGroup.get('fechaCliente').setValue(this.utilitarioService.getDateString(obj.fechaHoraActualizacion.toString()));
                this.formularioFormGroup.get('idCliente').setValue(obj.id);
                this.formularioFormGroup.get('estadoCliente').setValue(this.utilitarioService.returnEstadoEntity(obj.estado));
              }
            },
            error1 => this.alertService.mensajeError(AppConstantMessaga.MENSAJE_ERROR_CONEXION_SERVIDOR)
          );
        }
      );
  }

  onClickActualizar(valuesForm: any) {
    if (this.formularioFormGroup.valid) {
      const newCliente = {} as ClienteUpdateDto;
      newCliente.clienteNombre = valuesForm.nombreCliente;
      newCliente.id = this.id;
      const evento$ = this.clienteService.updateOneById(newCliente);
      evento$.subscribe(
        (even) => {
          this.alertService.toastSuccess(AppConstantMessaga.MENSAGE_ACTUALIAZCION_CORRECTO);
          this.routerService.navigate((['/cliente']));
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
