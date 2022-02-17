import { Component, OnInit } from '@angular/core';
import { CargueraDto } from 'src/app/dtos/carguera.dto';
import { AlertService } from 'src/app/services/alert.service';
import { CargueraService } from 'src/app/services/rest/carguera.service';
import { AppConstantMessaga, AppConstant } from 'src/app/app.constant';
import { error } from 'protractor';

@Component({
  selector: 'app-listar-carguera-page',
  templateUrl: './listar-carguera-page.component.html',
  styleUrls: ['./listar-carguera-page.component.css']
})
export class ListarCargueraPageComponent implements OnInit {

  cargueras: CargueraDto[] = [];
  entidadHabilitado: number = AppConstant.ENTIDAD_HABILITADO;
  entidadDeshabilitado: number = AppConstant.ENTIDAD_DESHABILITADO;
  entidadTextHabilitado: string = AppConstant.ENTIDAD_TEXT_HABILITADO;
  entidadTextDeshabilitado: string = AppConstant.ENTIDAD_TEXT_DESHABILITADO;
  constructor(
    private readonly cargueraRestService: CargueraService,
    private readonly alertService: AlertService,
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    const clientes$ = this.cargueraRestService.findAll();
    clientes$.subscribe(
      (obj) => {
        this.cargueras = obj;
        if (this.cargueras.length < 1) {
          this.alertService.mensajeInfo('No existen cargueras registrados');
        }
      },
      error1 => this.alertService.mensajeError(AppConstantMessaga.MENSAJE_ERROR_CONEXION_SERVIDOR)
    );
  }

  obtenerFecharString(fechaString:string): string{
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    if(fechaString!=null && fechaString!=""){
      try{
        const fecha = new Date(fechaString);
        return fecha.toLocaleDateString('es-ES', options);
      }catch(e){
        return "Fecha Incorrecta";
      }
    } else {
      return "N/A";
    }
  }

  onClickHabilitar(id: number|string){
    this.cargueraRestService.updateHabilitar(id).subscribe(
      value =>{
        this.alertService.toastSuccess(AppConstantMessaga.MENSAGE_ACTUALIAZCION_CORRECTO);
        this.loadData();
      },
      error => this.alertService.mensajeError(AppConstantMessaga.MENSAGE_ERROR_ACTUALIZAR)
    );
  }

  onClickDeshabilitar(id: number|string){
    this.cargueraRestService.updateDeshabilitar(id).subscribe(
      value =>{
        this.alertService.toastSuccess(AppConstantMessaga.MENSAGE_ACTUALIAZCION_CORRECTO);
        this.loadData();
      },
      error => this.alertService.mensajeError(AppConstantMessaga.MENSAGE_ERROR_ACTUALIZAR)
    );
  }

}
