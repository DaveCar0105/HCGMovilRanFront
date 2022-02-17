import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CrearCargueraPageComponent } from 'src/app/pages/crud/carguera/crear-carguera-page/crear-carguera-page.component';
import { EditarCargueraPageComponent } from 'src/app/pages/crud/carguera/editar-carguera-page/editar-carguera-page.component';
import { ListarCargueraPageComponent } from 'src/app/pages/crud/carguera/listar-carguera-page/listar-carguera-page.component';
import { CrearCausaPageComponent } from 'src/app/pages/crud/causa/crear-causa-page/crear-causa-page.component';
import { EditarCausaPageComponent } from 'src/app/pages/crud/causa/editar-causa-page/editar-causa-page.component';
import { ListarCausaPageComponent } from 'src/app/pages/crud/causa/listar-causa-page/listar-causa-page.component';
import { ListarClientePageComponent } from 'src/app/pages/crud/cliente/listar-cliente-page/listar-cliente-page.component';
import { CrearClientePageComponent } from 'src/app/pages/crud/cliente/crear-cliente-page/crear-cliente-page.component';
import { EditarClientePageComponent } from 'src/app/pages/crud/cliente/editar-cliente-page/editar-cliente-page.component';
import { EditarPaisPageComponent } from 'src/app/pages/crud/pais/editar-pais-page/editar-pais-page.component';
import { CrearPaisPageComponent } from 'src/app/pages/crud/pais/crear-pais-page/crear-pais-page.component';
import { ListarPaisPageComponent } from 'src/app/pages/crud/pais/listar-pais-page/listar-pais-page.component';
import { ListarPostcosechaPageComponent } from 'src/app/pages/crud/postcosecha/listar-postcosecha-page/listar-postcosecha-page.component';
import { EditarPostcosechaPageComponent } from 'src/app/pages/crud/postcosecha/editar-postcosecha-page/editar-postcosecha-page.component';
import { CrearPostcosechaPageComponent } from 'src/app/pages/crud/postcosecha/crear-postcosecha-page/crear-postcosecha-page.component';
import { CrearProductoPageComponent } from 'src/app/pages/crud/producto/crear-producto-page/crear-producto-page.component';
import { EditarProductoPageComponent } from 'src/app/pages/crud/producto/editar-producto-page/editar-producto-page.component';
import { ListarProductoPageComponent } from 'src/app/pages/crud/producto/listar-producto-page/listar-producto-page.component';
import { ListarTipoCajaPageComponent } from 'src/app/pages/crud/tipo-caja/listar-tipo-caja-page/listar-tipo-caja-page.component';
import { EditarTipoCajaPageComponent } from 'src/app/pages/crud/tipo-caja/editar-tipo-caja-page/editar-tipo-caja-page.component';
import { CrearTipoCajaPageComponent } from 'src/app/pages/crud/tipo-caja/crear-tipo-caja-page/crear-tipo-caja-page.component';
import { CrearUsuarioPageComponent } from 'src/app/pages/crud/usuario/crear-usuario-page/crear-usuario-page.component';
import { EditarUsuarioPageComponent } from 'src/app/pages/crud/usuario/editar-usuario-page/editar-usuario-page.component';
import { ListarUsuarioPageComponent } from 'src/app/pages/crud/usuario/listar-usuario-page/listar-usuario-page.component';
import { ListarVariedadPageComponent } from 'src/app/pages/crud/variedad/listar-variedad-page/listar-variedad-page.component';
import { EditarVariedadPageComponent } from 'src/app/pages/crud/variedad/editar-variedad-page/editar-variedad-page.component';
import { CrearVariedadPageComponent } from 'src/app/pages/crud/variedad/crear-variedad-page/crear-variedad-page.component';
import { CrearRangoPageComponent } from 'src/app/pages/crud/rango/crear-rango-page/crear-rango-page.component';
import { EditarRangoPageComponent } from 'src/app/pages/crud/rango/editar-rango-page/editar-rango-page.component';
import { ListarRangoPageComponent } from 'src/app/pages/crud/rango/listar-rango-page/listar-rango-page.component';
import { ListarCategoriaPageComponent } from 'src/app/pages/crud/categoria/listar-categoria-page/listar-categoria-page.component';
import { EditarCategoriaPageComponent } from 'src/app/pages/crud/categoria/editar-categoria-page/editar-categoria-page.component';
import { CrearCategoriaPageComponent } from 'src/app/pages/crud/categoria/crear-categoria-page/crear-categoria-page.component';
import { CrearSubcategoriaPageComponent } from 'src/app/pages/crud/subcategoria/crear-subcategoria-page/crear-subcategoria-page.component';
import { EditarSubcategoriaPageComponent } from 'src/app/pages/crud/subcategoria/editar-subcategoria-page/editar-subcategoria-page.component';
import { ListarSubcategoriaPageComponent } from 'src/app/pages/crud/subcategoria/listar-subcategoria-page/listar-subcategoria-page.component';
import { ListarItemPageComponent } from 'src/app/pages/crud/item/listar-item-page/listar-item-page.component';
import { EditarItemPageComponent } from 'src/app/pages/crud/item/editar-item-page/editar-item-page.component';
import { CrearItemPageComponent } from 'src/app/pages/crud/item/crear-item-page/crear-item-page.component';
import { CrearFormularioPageComponent } from 'src/app/pages/crud/formulario/crear-formulario-page/crear-formulario-page.component';
import { ListarFormularioPageComponent } from 'src/app/pages/crud/formulario/listar-formulario-page/listar-formulario-page.component';
import { VerFormularioPageComponent } from 'src/app/pages/crud/formulario/ver-formulario-page/ver-formulario-page.component';
import { ItemRangoPageComponent } from 'src/app/pages/crud/item-rango/item-rango-page/item-rango-page.component';
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent,
    CrearCargueraPageComponent,
    EditarCargueraPageComponent,
    ListarCargueraPageComponent,
    CrearCausaPageComponent,
    EditarCausaPageComponent,
    ListarCausaPageComponent,
    ListarClientePageComponent,
    CrearClientePageComponent,
    EditarClientePageComponent,
    EditarPaisPageComponent,
    CrearPaisPageComponent,
    ListarPaisPageComponent,
    ListarPostcosechaPageComponent,
    EditarPostcosechaPageComponent,
    CrearPostcosechaPageComponent,
    CrearProductoPageComponent,
    EditarProductoPageComponent,
    ListarProductoPageComponent,
    ListarTipoCajaPageComponent,
    EditarTipoCajaPageComponent,
    CrearTipoCajaPageComponent,
    CrearUsuarioPageComponent,
    EditarUsuarioPageComponent,
    ListarUsuarioPageComponent,
    ListarVariedadPageComponent,
    EditarVariedadPageComponent,
    CrearVariedadPageComponent,
    CrearRangoPageComponent,
    EditarRangoPageComponent,
    ListarRangoPageComponent,
    ListarCategoriaPageComponent,
    EditarCategoriaPageComponent,
    CrearCategoriaPageComponent,
    CrearSubcategoriaPageComponent,
    EditarSubcategoriaPageComponent,
    ListarSubcategoriaPageComponent,
    ListarItemPageComponent,
    EditarItemPageComponent,
    CrearItemPageComponent,
    CrearFormularioPageComponent,
    ListarFormularioPageComponent,
    VerFormularioPageComponent,
    ItemRangoPageComponent
  ]
})

export class AdminLayoutModule {}
