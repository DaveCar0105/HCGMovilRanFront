import { Component, OnInit } from '@angular/core';
import { PostcosechaDto } from 'src/app/dtos/postcosecha.dto';
import { AppConstant, AppConstantMessaga } from 'src/app/app.constant';
import { PostcoschaService } from 'src/app/services/rest/postcoscha.service';
import { AlertService } from 'src/app/services/alert.service';
import { UtilitarioService } from 'src/app/services/utilitario.service';

@Component({
  selector: 'app-listar-postcosecha-page',
  templateUrl: './listar-postcosecha-page.component.html',
  styleUrls: ['./listar-postcosecha-page.component.css']
})
export class ListarPostcosechaPageComponent implements OnInit {

  postcosechas: PostcosechaDto[] = [];
  entidadHabilitado: number = AppConstant.ENTIDAD_HABILITADO;
  entidadDeshabilitado: number = AppConstant.ENTIDAD_DESHABILITADO;
  entidadTextHabilitado: string = AppConstant.ENTIDAD_TEXT_HABILITADO;
  entidadTextDeshabilitado: string = AppConstant.ENTIDAD_TEXT_DESHABILITADO;
  constructor(
    private readonly postcosechaRestService: PostcoschaService,
    private readonly alertService: AlertService,
    private readonly utilitariosService: UtilitarioService
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    const causas$ = this.postcosechaRestService.findAll();
    causas$.subscribe(
      (obj) => {
        this.postcosechas = obj;
        if (this.postcosechas.length < 1) {
          this.alertService.mensajeInfo('No existen postcosechas registrados');
        }
      },
      error1 => this.alertService.mensajeError(AppConstantMessaga.MENSAJE_ERROR_CONEXION_SERVIDOR)
    );
  }

  obtenerFecharString(fechaString:string): string{
    return this.utilitariosService.getDateString(fechaString);
  }

  onClickHabilitar(id: number|string){
    this.postcosechaRestService.updateHabilitar(id).subscribe(
      value =>{
        this.alertService.toastSuccess(AppConstantMessaga.MENSAGE_ACTUALIAZCION_CORRECTO);
        this.loadData();
      },
      error => this.alertService.mensajeError(AppConstantMessaga.MENSAGE_ERROR_ACTUALIZAR)
    );
  }

  onClickDeshabilitar(id: number|string){
    this.postcosechaRestService.updateDeshabilitar(id).subscribe(
      value =>{
        this.alertService.toastSuccess(AppConstantMessaga.MENSAGE_ACTUALIAZCION_CORRECTO);
        this.loadData();
      },
      error => this.alertService.mensajeError(AppConstantMessaga.MENSAGE_ERROR_ACTUALIZAR)
    );
  }

  getPostcosechaPadre(id: number | string){
    const value = this.postcosechas.find( ob => ob.id == id);
    if (value && value!= undefined)
      return value.postcosechaNombre;
    else
      return "";
  }

}
