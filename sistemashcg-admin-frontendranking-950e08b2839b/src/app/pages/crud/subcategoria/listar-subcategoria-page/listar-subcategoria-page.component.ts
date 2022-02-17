import { Component, OnInit } from '@angular/core';
import { SubcategoriaDto } from 'src/app/dtos/subcategoria.dto';
import { AppConstant, AppConstantMessaga } from 'src/app/app.constant';
import { SubcategoriaService } from 'src/app/services/rest/subcategoria.service';
import { AlertService } from 'src/app/services/alert.service';
import { UtilitarioService } from 'src/app/services/utilitario.service';
import { CategoriaDto } from 'src/app/dtos/categoria.dto';

@Component({
  selector: 'app-listar-subcategoria-page',
  templateUrl: './listar-subcategoria-page.component.html',
  styleUrls: ['./listar-subcategoria-page.component.css']
})
export class ListarSubcategoriaPageComponent implements OnInit {

  subcategorias: SubcategoriaDto[] = [];
  entidadHabilitado: number = AppConstant.ENTIDAD_HABILITADO;
  entidadDeshabilitado: number = AppConstant.ENTIDAD_DESHABILITADO;
  entidadTextHabilitado: string = AppConstant.ENTIDAD_TEXT_HABILITADO;
  entidadTextDeshabilitado: string = AppConstant.ENTIDAD_TEXT_DESHABILITADO;
  constructor(
    private readonly subcategoriaRestService: SubcategoriaService,
    private readonly alertService: AlertService,
    private readonly utilitariosService: UtilitarioService
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    const subcategorias$ = this.subcategoriaRestService.findAll();
    subcategorias$.subscribe(
      (obj) => {
        this.subcategorias = obj;
        if (this.subcategorias.length < 1) {
          this.alertService.mensajeInfo('No existen subcategorias registrados');
        }
      },
      error1 => this.alertService.mensajeError(AppConstantMessaga.MENSAJE_ERROR_CONEXION_SERVIDOR)
    );
  }

  obtenerFecharString(fechaString:string): string{
    return this.utilitariosService.getDateString(fechaString);
  }

  onClickHabilitar(id: number|string){
    this.subcategoriaRestService.updateHabilitar(id).subscribe(
      value =>{
        this.alertService.toastSuccess(AppConstantMessaga.MENSAGE_ACTUALIAZCION_CORRECTO);
        this.loadData();
      },
      error => this.alertService.mensajeError(AppConstantMessaga.MENSAGE_ERROR_ACTUALIZAR)
    );
  }

  onClickDeshabilitar(id: number|string){
    this.subcategoriaRestService.updateDeshabilitar(id).subscribe(
      value =>{
        this.alertService.toastSuccess(AppConstantMessaga.MENSAGE_ACTUALIAZCION_CORRECTO);
        this.loadData();
      },
      error => this.alertService.mensajeError(AppConstantMessaga.MENSAGE_ERROR_ACTUALIZAR)
    );
  }

  getCategoria(obj: CategoriaDto){
    if (obj && obj!= undefined)
      return obj.categoriaNombre;
    else
      return "";
  }

}
