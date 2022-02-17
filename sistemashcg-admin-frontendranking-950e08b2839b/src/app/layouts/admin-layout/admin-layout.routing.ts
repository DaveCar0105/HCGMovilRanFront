import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { InicioComponent } from 'src/app/pages/inicio/inicio.component';
import { CrearCargueraPageComponent } from 'src/app/pages/crud/carguera/crear-carguera-page/crear-carguera-page.component';
import { EditarCargueraPageComponent } from 'src/app/pages/crud/carguera/editar-carguera-page/editar-carguera-page.component';
import { ListarCargueraPageComponent } from 'src/app/pages/crud/carguera/listar-carguera-page/listar-carguera-page.component';
import { ListarCausaPageComponent } from 'src/app/pages/crud/causa/listar-causa-page/listar-causa-page.component';
import { EditarCausaPageComponent } from 'src/app/pages/crud/causa/editar-causa-page/editar-causa-page.component';
import { CrearCausaPageComponent } from 'src/app/pages/crud/causa/crear-causa-page/crear-causa-page.component';
import { ListarClientePageComponent } from 'src/app/pages/crud/cliente/listar-cliente-page/listar-cliente-page.component';
import { EditarClientePageComponent } from 'src/app/pages/crud/cliente/editar-cliente-page/editar-cliente-page.component';
import { CrearClientePageComponent } from 'src/app/pages/crud/cliente/crear-cliente-page/crear-cliente-page.component';
import { ListarPaisPageComponent } from 'src/app/pages/crud/pais/listar-pais-page/listar-pais-page.component';
import { EditarPaisPageComponent } from 'src/app/pages/crud/pais/editar-pais-page/editar-pais-page.component';
import { CrearPaisPageComponent } from 'src/app/pages/crud/pais/crear-pais-page/crear-pais-page.component';
import { ListarPostcosechaPageComponent } from 'src/app/pages/crud/postcosecha/listar-postcosecha-page/listar-postcosecha-page.component';
import { EditarPostcosechaPageComponent } from 'src/app/pages/crud/postcosecha/editar-postcosecha-page/editar-postcosecha-page.component';
import { CrearPostcosechaPageComponent } from 'src/app/pages/crud/postcosecha/crear-postcosecha-page/crear-postcosecha-page.component';
import { ListarProductoPageComponent } from 'src/app/pages/crud/producto/listar-producto-page/listar-producto-page.component';
import { EditarProductoPageComponent } from 'src/app/pages/crud/producto/editar-producto-page/editar-producto-page.component';
import { CrearProductoPageComponent } from 'src/app/pages/crud/producto/crear-producto-page/crear-producto-page.component';
import { CrearTipoCajaPageComponent } from 'src/app/pages/crud/tipo-caja/crear-tipo-caja-page/crear-tipo-caja-page.component';
import { EditarTipoCajaPageComponent } from 'src/app/pages/crud/tipo-caja/editar-tipo-caja-page/editar-tipo-caja-page.component';
import { ListarTipoCajaPageComponent } from 'src/app/pages/crud/tipo-caja/listar-tipo-caja-page/listar-tipo-caja-page.component';
import { ListarUsuarioPageComponent } from 'src/app/pages/crud/usuario/listar-usuario-page/listar-usuario-page.component';
import { EditarUsuarioPageComponent } from 'src/app/pages/crud/usuario/editar-usuario-page/editar-usuario-page.component';
import { CrearUsuarioPageComponent } from 'src/app/pages/crud/usuario/crear-usuario-page/crear-usuario-page.component';
import { ListarVariedadPageComponent } from 'src/app/pages/crud/variedad/listar-variedad-page/listar-variedad-page.component';
import { EditarVariedadPageComponent } from 'src/app/pages/crud/variedad/editar-variedad-page/editar-variedad-page.component';
import { CrearVariedadPageComponent } from 'src/app/pages/crud/variedad/crear-variedad-page/crear-variedad-page.component';
import { ListarRangoPageComponent } from 'src/app/pages/crud/rango/listar-rango-page/listar-rango-page.component';
import { EditarRangoPageComponent } from 'src/app/pages/crud/rango/editar-rango-page/editar-rango-page.component';
import { CrearRangoPageComponent } from 'src/app/pages/crud/rango/crear-rango-page/crear-rango-page.component';
import { ListarCategoriaPageComponent } from 'src/app/pages/crud/categoria/listar-categoria-page/listar-categoria-page.component';
import { EditarCategoriaPageComponent } from 'src/app/pages/crud/categoria/editar-categoria-page/editar-categoria-page.component';
import { CrearCategoriaPageComponent } from 'src/app/pages/crud/categoria/crear-categoria-page/crear-categoria-page.component';
import { ListarSubcategoriaPageComponent } from 'src/app/pages/crud/subcategoria/listar-subcategoria-page/listar-subcategoria-page.component';
import { EditarSubcategoriaPageComponent } from 'src/app/pages/crud/subcategoria/editar-subcategoria-page/editar-subcategoria-page.component';
import { CrearSubcategoriaPageComponent } from 'src/app/pages/crud/subcategoria/crear-subcategoria-page/crear-subcategoria-page.component';
import { ListarItemPageComponent } from 'src/app/pages/crud/item/listar-item-page/listar-item-page.component';
import { EditarItemPageComponent } from 'src/app/pages/crud/item/editar-item-page/editar-item-page.component';
import { CrearItemPageComponent } from 'src/app/pages/crud/item/crear-item-page/crear-item-page.component';
import { CrearFormularioPageComponent } from 'src/app/pages/crud/formulario/crear-formulario-page/crear-formulario-page.component';
import { ListarFormularioPageComponent } from 'src/app/pages/crud/formulario/listar-formulario-page/listar-formulario-page.component';
import { VerFormularioPageComponent } from 'src/app/pages/crud/formulario/ver-formulario-page/ver-formulario-page.component';
import { ItemRangoPageComponent } from 'src/app/pages/crud/item-rango/item-rango-page/item-rango-page.component';

export const AdminLayoutRoutes: Routes = [
    {path: 'inicio', component: InicioComponent},/*
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },*/
    {path: 'crear-carguera', component: CrearCargueraPageComponent},
    {path: 'editar-carguera/:id', component: EditarCargueraPageComponent},
    {path: 'carguera', component: ListarCargueraPageComponent},
    {path: 'crear-causa', component: CrearCausaPageComponent},
    {path: 'editar-causa/:id', component: EditarCausaPageComponent},
    {path: 'causa', component: ListarCausaPageComponent},
    {path: 'crear-cliente', component: CrearClientePageComponent},
    {path: 'editar-cliente/:id', component: EditarClientePageComponent},
    {path: 'cliente', component: ListarClientePageComponent},
    {path: 'crear-pais', component: CrearPaisPageComponent},
    {path: 'editar-pais/:id', component: EditarPaisPageComponent},
    {path: 'pais', component: ListarPaisPageComponent},
    {path: 'crear-postcosecha', component: CrearPostcosechaPageComponent},
    {path: 'editar-postcosecha/:id', component: EditarPostcosechaPageComponent},
    {path: 'postcosecha', component: ListarPostcosechaPageComponent},
    {path: 'crear-producto', component: CrearProductoPageComponent},
    {path: 'editar-producto/:id', component: EditarProductoPageComponent},
    {path: 'producto', component: ListarProductoPageComponent},
    {path: 'crear-tipo-caja', component: CrearTipoCajaPageComponent},
    {path: 'editar-tipo-caja/:id', component: EditarTipoCajaPageComponent},
    {path: 'tipo-caja', component: ListarTipoCajaPageComponent},
    {path: 'crear-usuario', component: CrearUsuarioPageComponent},
    {path: 'editar-usuario/:id', component: EditarUsuarioPageComponent},
    {path: 'usuario', component: ListarUsuarioPageComponent},
    {path: 'crear-variedad', component: CrearVariedadPageComponent},
    {path: 'editar-variedad/:id', component: EditarVariedadPageComponent},
    {path: 'variedad', component: ListarVariedadPageComponent},
    {path: 'crear-rango', component: CrearRangoPageComponent},
    {path: 'editar-rango/:id', component: EditarRangoPageComponent},
    {path: 'rango', component: ListarRangoPageComponent},
    {path: 'crear-categoria', component: CrearCategoriaPageComponent},
    {path: 'editar-categoria/:id', component: EditarCategoriaPageComponent},
    {path: 'categoria', component: ListarCategoriaPageComponent},
    {path: 'crear-subcategoria', component: CrearSubcategoriaPageComponent},
    {path: 'editar-subcategoria/:id', component: EditarSubcategoriaPageComponent},
    {path: 'subcategoria', component: ListarSubcategoriaPageComponent},
    {path: 'crear-item', component: CrearItemPageComponent},
    {path: 'editar-item/:id', component: EditarItemPageComponent},
    {path: 'item', component: ListarItemPageComponent},
    {path: 'crear-formulario', component: CrearFormularioPageComponent},
    {path: 'ver-formulario/:id', component: VerFormularioPageComponent},
    {path: 'formulario', component: ListarFormularioPageComponent},
    {path: 'item-rango', component: ItemRangoPageComponent},
];
