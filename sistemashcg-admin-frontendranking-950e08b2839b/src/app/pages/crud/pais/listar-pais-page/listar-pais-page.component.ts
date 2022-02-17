import { Component, OnInit } from '@angular/core';
import { PaisDto } from 'src/app/dtos/pais.dto';
import { AppConstant, AppConstantMessaga } from 'src/app/app.constant';
import { PaisService } from 'src/app/services/rest/pais.service';
import { AlertService } from 'src/app/services/alert.service';
import { UtilitarioService } from 'src/app/services/utilitario.service';

@Component({
  selector: 'app-listar-pais-page',
  templateUrl: './listar-pais-page.component.html',
  styleUrls: ['./listar-pais-page.component.css']
})
export class ListarPaisPageComponent implements OnInit {

  paises: PaisDto[] = [];
  entidadHabilitado: number = AppConstant.ENTIDAD_HABILITADO;
  entidadDeshabilitado: number = AppConstant.ENTIDAD_DESHABILITADO;
  entidadTextHabilitado: string = AppConstant.ENTIDAD_TEXT_HABILITADO;
  entidadTextDeshabilitado: string = AppConstant.ENTIDAD_TEXT_DESHABILITADO;
  constructor(
    private readonly paisRestService: PaisService,
    private readonly alertService: AlertService,
    private readonly utilitariosService: UtilitarioService
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    const paises$ = this.paisRestService.findAll();
    paises$.subscribe(
      (obj) => {
        this.paises = obj;
        if (this.paises.length < 1) {
          this.alertService.mensajeInfo('No existen paises registrados');
        }
      },
      error1 => this.alertService.mensajeError(AppConstantMessaga.MENSAJE_ERROR_CONEXION_SERVIDOR)
    );
  }

  obtenerFecharString(fechaString:string): string{
    return this.utilitariosService.getDateString(fechaString);
  }

  onClickHabilitar(id: number|string){
    this.paisRestService.updateHabilitar(id).subscribe(
      value =>{
        this.alertService.toastSuccess(AppConstantMessaga.MENSAGE_ACTUALIAZCION_CORRECTO);
        this.loadData();
      },
      error => this.alertService.mensajeError(AppConstantMessaga.MENSAGE_ERROR_ACTUALIZAR)
    );
  }

  onClickDeshabilitar(id: number|string){
    this.paisRestService.updateDeshabilitar(id).subscribe(
      value =>{
        this.alertService.toastSuccess(AppConstantMessaga.MENSAGE_ACTUALIAZCION_CORRECTO);
        this.loadData();
      },
      error => this.alertService.mensajeError(AppConstantMessaga.MENSAGE_ERROR_ACTUALIZAR)
    );
  }

}
