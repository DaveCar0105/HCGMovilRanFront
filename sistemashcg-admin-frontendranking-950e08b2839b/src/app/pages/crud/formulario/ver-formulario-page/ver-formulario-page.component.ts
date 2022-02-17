import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { SubcategoriaDto } from 'src/app/dtos/subcategoria.dto';
import { ItemDto } from 'src/app/dtos/item.dto';
import { FormularioService } from 'src/app/services/rest/formulario.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SubcategoriaService } from 'src/app/services/rest/subcategoria.service';
import { FormularioDto } from 'src/app/dtos/formulario.dto';
import { AppConstantMessaga } from 'src/app/app.constant';

@Component({
  selector: 'app-ver-formulario-page',
  templateUrl: './ver-formulario-page.component.html',
  styleUrls: ['./ver-formulario-page.component.css']
})
export class VerFormularioPageComponent implements OnInit {

  formularioFormGroup: FormGroup;
  itemsSelected: ItemDto[];
  alertService: any;
  constructor(
    private fb: FormBuilder,
    private readonly fomularioService: FormularioService,
    private readonly routerService: Router,
    private readonly activatedRouteService: ActivatedRoute,
  ) {
    this.formularioFormGroup = this.fb.group({
      nombreFormulario: new FormControl({value: '', disabled: true}),
      nombreDesplazarFormulario: new FormControl({value: '', disabled: true}),
    });
   }

  ngOnInit(): void {
    this.itemsSelected = [];
    const rutaActiva$ = this.activatedRouteService.params;
    rutaActiva$
      .subscribe(
        (parametros) => {
          const subcategoria$ = this.fomularioService.findOneById(parametros.id);
          subcategoria$.subscribe(
            (obj: FormularioDto) => {
              const formularioGet: FormularioDto = obj;
              if (!formularioGet) {
                this.alertService.mensajeError(' Formulario no encontrado!');
              }else{
                this.itemsSelected = formularioGet.formularioItems!=null? formularioGet.formularioItems.map(a=> a.item) : [];
                this.formularioFormGroup.get('nombreFormulario').setValue(obj.formularioNombre);
                this.formularioFormGroup.get('nombreDesplazarFormulario').setValue(obj.formularioNombreDesplazar);
              }
            },
            error1 => this.alertService.mensajeError(AppConstantMessaga.MENSAJE_ERROR_CONEXION_SERVIDOR)
          );
        }
      );
  }

  onClickGuardar(valuesForm: any) {
    this.routerService.navigate((['/formulario']));
  }

  getSucategoria(obj: SubcategoriaDto){
    if (obj && obj!= undefined)
      return obj.subcategoriaNombre;
    else
      return "";
  }


}
