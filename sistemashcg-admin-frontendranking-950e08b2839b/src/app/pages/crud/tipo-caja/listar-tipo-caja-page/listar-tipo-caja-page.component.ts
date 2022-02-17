import { Component, OnInit } from '@angular/core';
import { TipoCajaDto } from 'src/app/dtos/tipo-caja.dto';
import { AppConstant, AppConstantMessaga } from 'src/app/app.constant';
import { TipoCajaService } from 'src/app/services/rest/tipo-caja.service';
import { AlertService } from 'src/app/services/alert.service';
import { UtilitarioService } from 'src/app/services/utilitario.service';

@Component({
  selector: 'app-listar-tipo-caja-page',
  templateUrl: './listar-tipo-caja-page.component.html',
  styleUrls: ['./listar-tipo-caja-page.component.css']
})
export class ListarTipoCajaPageComponent implements OnInit {

  tipoCajas: TipoCajaDto[] = [];
  entidadHabilitado: number = AppConstant.ENTIDAD_HABILITADO;
  entidadDeshabilitado: number = AppConstant.ENTIDAD_DESHABILITADO;
  entidadTextHabilitado: string = AppConstant.ENTIDAD_TEXT_HABILITADO;
  entidadTextDeshabilitado: string = AppConstant.ENTIDAD_TEXT_DESHABILITADO;
  constructor(
    private readonly tipoCajaRestService: TipoCajaService,
    private readonly alertService: AlertService,
    private readonly utilitariosService: UtilitarioService
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    const tipoCaja$ = this.tipoCajaRestService.findAll();
    tipoCaja$.subscribe(
      (obj) => {
        this.tipoCajas = obj;
        if (this.tipoCajas.length < 1) {
          this.alertService.mensajeInfo('No existen tipos de cajas registrados');
        }
      },
      error1 => this.alertService.mensajeError(AppConstantMessaga.MENSAJE_ERROR_CONEXION_SERVIDOR)
    );
  }

  obtenerFecharString(fechaString:string): string{
    return this.utilitariosService.getDateString(fechaString);
  }

  onClickHabilitar(id: number|string){
    this.tipoCajaRestService.updateHabilitar(id).subscribe(
      value =>{
        this.alertService.toastSuccess(AppConstantMessaga.MENSAGE_ACTUALIAZCION_CORRECTO);
        this.loadData();
      },
      error => this.alertService.mensajeError(AppConstantMessaga.MENSAGE_ERROR_ACTUALIZAR)
    );
  }

  onClickDeshabilitar(id: number|string){
    this.tipoCajaRestService.updateDeshabilitar(id).subscribe(
      value =>{
        this.alertService.toastSuccess(AppConstantMessaga.MENSAGE_ACTUALIAZCION_CORRECTO);
        this.loadData();
      },
      error => this.alertService.mensajeError(AppConstantMessaga.MENSAGE_ERROR_ACTUALIZAR)
    );
  }


}
