import { Component, OnInit } from '@angular/core';
import { AppConstant, AppConstantMessaga } from 'src/app/app.constant';
import { VariedadDto } from 'src/app/dtos/variedad.dto';
import { VariedadService } from 'src/app/services/rest/variedad.service';
import { AlertService } from 'src/app/services/alert.service';
import { UtilitarioService } from 'src/app/services/utilitario.service';
import { ProductoDto } from 'src/app/dtos/producto.dto';

@Component({
  selector: 'app-listar-variedad-page',
  templateUrl: './listar-variedad-page.component.html',
  styleUrls: ['./listar-variedad-page.component.css']
})
export class ListarVariedadPageComponent implements OnInit {

  variedades: VariedadDto[] = [];
  entidadHabilitado: number = AppConstant.ENTIDAD_HABILITADO;
  entidadDeshabilitado: number = AppConstant.ENTIDAD_DESHABILITADO;
  entidadTextHabilitado: string = AppConstant.ENTIDAD_TEXT_HABILITADO;
  entidadTextDeshabilitado: string = AppConstant.ENTIDAD_TEXT_DESHABILITADO;
  constructor(
    private readonly variedadRestService: VariedadService,
    private readonly alertService: AlertService,
    private readonly utilitariosService: UtilitarioService
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    const variedades$ = this.variedadRestService.findAll();
    variedades$.subscribe(
      (obj) => {
        this.variedades = obj;
        if (this.variedades.length < 1) {
          this.alertService.mensajeInfo('No existen variedades registrados');
        }
      },
      error1 => this.alertService.mensajeError(AppConstantMessaga.MENSAJE_ERROR_CONEXION_SERVIDOR)
    );
  }

  obtenerFecharString(fechaString:string): string{
    return this.utilitariosService.getDateString(fechaString);
  }

  onClickHabilitar(id: number|string){
    this.variedadRestService.updateHabilitar(id).subscribe(
      value =>{
        this.alertService.toastSuccess(AppConstantMessaga.MENSAGE_ACTUALIAZCION_CORRECTO);
        this.loadData();
      },
      error => this.alertService.mensajeError(AppConstantMessaga.MENSAGE_ERROR_ACTUALIZAR)
    );
  }

  onClickDeshabilitar(id: number|string){
    this.variedadRestService.updateDeshabilitar(id).subscribe(
      value =>{
        this.alertService.toastSuccess(AppConstantMessaga.MENSAGE_ACTUALIAZCION_CORRECTO);
        this.loadData();
      },
      error => this.alertService.mensajeError(AppConstantMessaga.MENSAGE_ERROR_ACTUALIZAR)
    );
  }

  getProducto(obj: ProductoDto){
    if (obj && obj!= undefined)
      return obj.productoNombre;
    else
      return "";
  }

}
