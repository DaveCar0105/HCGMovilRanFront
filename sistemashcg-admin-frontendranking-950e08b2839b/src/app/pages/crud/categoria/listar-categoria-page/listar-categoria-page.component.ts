import { Component, OnInit } from '@angular/core';
import { CategoriaDto } from 'src/app/dtos/categoria.dto';
import { AppConstant, AppConstantMessaga } from 'src/app/app.constant';
import { CategoriaService } from 'src/app/services/rest/categoria.service';
import { AlertService } from 'src/app/services/alert.service';
import { UtilitarioService } from 'src/app/services/utilitario.service';

@Component({
  selector: 'app-listar-categoria-page',
  templateUrl: './listar-categoria-page.component.html',
  styleUrls: ['./listar-categoria-page.component.css']
})
export class ListarCategoriaPageComponent implements OnInit {

  categorias: CategoriaDto[] = [];
  entidadHabilitado: number = AppConstant.ENTIDAD_HABILITADO;
  entidadDeshabilitado: number = AppConstant.ENTIDAD_DESHABILITADO;
  entidadTextHabilitado: string = AppConstant.ENTIDAD_TEXT_HABILITADO;
  entidadTextDeshabilitado: string = AppConstant.ENTIDAD_TEXT_DESHABILITADO;
  constructor(
    private readonly categoriaRestService: CategoriaService,
    private readonly alertService: AlertService,
    private readonly utilitariosService: UtilitarioService
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    const categorias$ = this.categoriaRestService.findAll();
    categorias$.subscribe(
      (obj) => {
        this.categorias = obj;
        if (this.categorias.length < 1) {
          this.alertService.mensajeInfo('No existen categorias registrados');
        }
      },
      error1 => this.alertService.mensajeError(AppConstantMessaga.MENSAJE_ERROR_CONEXION_SERVIDOR)
    );
  }

  obtenerFecharString(fechaString:string): string{
    return this.utilitariosService.getDateString(fechaString);
  }

  onClickHabilitar(id: number|string){
    this.categoriaRestService.updateHabilitar(id).subscribe(
      value =>{
        this.alertService.toastSuccess(AppConstantMessaga.MENSAGE_ACTUALIAZCION_CORRECTO);
        this.loadData();
      },
      error => this.alertService.mensajeError(AppConstantMessaga.MENSAGE_ERROR_ACTUALIZAR)
    );
  }

  onClickDeshabilitar(id: number|string){
    this.categoriaRestService.updateDeshabilitar(id).subscribe(
      value =>{
        this.alertService.toastSuccess(AppConstantMessaga.MENSAGE_ACTUALIAZCION_CORRECTO);
        this.loadData();
      },
      error => this.alertService.mensajeError(AppConstantMessaga.MENSAGE_ERROR_ACTUALIZAR)
    );
  }
}
