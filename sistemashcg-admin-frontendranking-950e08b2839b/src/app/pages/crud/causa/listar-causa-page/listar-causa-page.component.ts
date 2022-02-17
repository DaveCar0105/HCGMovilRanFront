import { Component, OnInit } from '@angular/core';
import { AppConstant, AppConstantMessaga } from 'src/app/app.constant';
import { UtilitarioService } from 'src/app/services/utilitario.service';
import { AlertService } from 'src/app/services/alert.service';
import { CausaDto } from 'src/app/dtos/causa.dto';
import { CausaService } from 'src/app/services/rest/causa.service';

@Component({
  selector: 'app-listar-causa-page',
  templateUrl: './listar-causa-page.component.html',
  styleUrls: ['./listar-causa-page.component.css']
})
export class ListarCausaPageComponent implements OnInit {

  causas: CausaDto[] = [];
  entidadHabilitado: number = AppConstant.ENTIDAD_HABILITADO;
  entidadDeshabilitado: number = AppConstant.ENTIDAD_DESHABILITADO;
  entidadTextHabilitado: string = AppConstant.ENTIDAD_TEXT_HABILITADO;
  entidadTextDeshabilitado: string = AppConstant.ENTIDAD_TEXT_DESHABILITADO;
  constructor(
    private readonly causaRestService: CausaService,
    private readonly alertService: AlertService,
    private readonly utilitariosService: UtilitarioService
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    const causas$ = this.causaRestService.findAll();
    causas$.subscribe(
      (obj) => {
        this.causas = obj;
        if (this.causas.length < 1) {
          this.alertService.mensajeInfo('No existen causas registrados');
        }
      },
      error1 => this.alertService.mensajeError(AppConstantMessaga.MENSAJE_ERROR_CONEXION_SERVIDOR)
    );
  }

  obtenerFecharString(fechaString:string): string{
    return this.utilitariosService.getDateString(fechaString);
  }

  onClickHabilitar(id: number|string){
    this.causaRestService.updateHabilitar(id).subscribe(
      value =>{
        this.alertService.toastSuccess(AppConstantMessaga.MENSAGE_ACTUALIAZCION_CORRECTO);
        this.loadData();
      },
      error => this.alertService.mensajeError(AppConstantMessaga.MENSAGE_ERROR_ACTUALIZAR)
    );
  }

  onClickDeshabilitar(id: number|string){
    this.causaRestService.updateDeshabilitar(id).subscribe(
      value =>{
        this.alertService.toastSuccess(AppConstantMessaga.MENSAGE_ACTUALIAZCION_CORRECTO);
        this.loadData();
      },
      error => this.alertService.mensajeError(AppConstantMessaga.MENSAGE_ERROR_ACTUALIZAR)
    );
  }

}
