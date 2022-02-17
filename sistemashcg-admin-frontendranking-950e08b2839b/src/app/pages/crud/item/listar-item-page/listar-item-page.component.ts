import { Component, OnInit } from '@angular/core';
import { ItemDto } from 'src/app/dtos/item.dto';
import { AppConstant, AppConstantMessaga } from 'src/app/app.constant';
import { ItemService } from 'src/app/services/rest/item.service';
import { AlertService } from 'src/app/services/alert.service';
import { UtilitarioService } from 'src/app/services/utilitario.service';
import { SubcategoriaDto } from 'src/app/dtos/subcategoria.dto';

@Component({
  selector: 'app-listar-item-page',
  templateUrl: './listar-item-page.component.html',
  styleUrls: ['./listar-item-page.component.css']
})
export class ListarItemPageComponent implements OnInit {

  items: ItemDto[] = [];
  entidadHabilitado: number = AppConstant.ENTIDAD_HABILITADO;
  entidadDeshabilitado: number = AppConstant.ENTIDAD_DESHABILITADO;
  entidadTextHabilitado: string = AppConstant.ENTIDAD_TEXT_HABILITADO;
  entidadTextDeshabilitado: string = AppConstant.ENTIDAD_TEXT_DESHABILITADO;
  constructor(
    private readonly itemRestService: ItemService,
    private readonly alertService: AlertService,
    private readonly utilitariosService: UtilitarioService
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    const items$ = this.itemRestService.findAll();
    items$.subscribe(
      (obj) => {
        this.items = obj;
        if (this.items.length < 1) {
          this.alertService.mensajeInfo('No existen items registrados');
        }
      },
      error1 => this.alertService.mensajeError(AppConstantMessaga.MENSAJE_ERROR_CONEXION_SERVIDOR)
    );
  }

  obtenerFecharString(fechaString:string): string{
    return this.utilitariosService.getDateString(fechaString);
  }

  onClickHabilitar(id: number|string){
    this.itemRestService.updateHabilitar(id).subscribe(
      value =>{
        this.alertService.toastSuccess(AppConstantMessaga.MENSAGE_ACTUALIAZCION_CORRECTO);
        this.loadData();
      },
      error => this.alertService.mensajeError(AppConstantMessaga.MENSAGE_ERROR_ACTUALIZAR)
    );
  }

  onClickDeshabilitar(id: number|string){
    this.itemRestService.updateDeshabilitar(id).subscribe(
      value =>{
        this.alertService.toastSuccess(AppConstantMessaga.MENSAGE_ACTUALIAZCION_CORRECTO);
        this.loadData();
      },
      error => this.alertService.mensajeError(AppConstantMessaga.MENSAGE_ERROR_ACTUALIZAR)
    );
  }

  getSubcategoria(obj: SubcategoriaDto){
    if (obj && obj!= undefined)
      return obj.subcategoriaNombre;
    else
      return "";
  }

}
