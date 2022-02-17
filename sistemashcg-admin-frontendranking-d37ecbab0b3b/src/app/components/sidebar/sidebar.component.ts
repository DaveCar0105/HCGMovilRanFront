import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [/*
    { path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
    { path: '/icons', title: 'Icons',  icon:'ni-planet text-blue', class: '' },
    { path: '/maps', title: 'Maps',  icon:'ni-pin-3 text-orange', class: '' },
    { path: '/user-profile', title: 'User profile',  icon:'ni-single-02 text-yellow', class: '' },
    { path: '/tables', title: 'Tables',  icon:'ni-bullet-list-67 text-red', class: '' },
    { path: '/login', title: 'Login',  icon:'ni-key-25 text-info', class: '' },
    { path: '/register', title: 'Register',  icon:'ni-circle-08 text-pink', class: '' },*/
    //------------------------------
    { path: '/carguera', title: 'Carguera',  icon:'ni-circle-08 text-primary', class: '' },
    { path: '/causa', title: 'Causa',  icon:'ni-circle-08 text-blue', class: '' },
    { path: '/cliente', title: 'Cliente',  icon:'ni-circle-08 text-orange', class: '' },
    { path: '/pais', title: 'Pais',  icon:'ni-circle-08 text-yellow', class: '' },
    { path: '/postcosecha', title: 'Postcosecha',  icon:'ni-circle-08 text-red', class: '' },
    { path: '/producto', title: 'Producto',  icon:'ni-circle-08 text-info', class: '' },
    { path: '/tipo-caja', title: 'Tipo Caja',  icon:'ni-circle-08 text-purple', class: '' },
    { path: '/usuario', title: 'Usuario',  icon:'ni-circle-08 text-black', class: '' },
    { path: '/variedad', title: 'Variedad',  icon:'ni-circle-08 text-pink', class: '' }
];

export const ROUTES_ADIMINISTRADOR: RouteInfo[] = [/*
  {path: '/listar-rack', title: 'Bodegas', icon: 'ni-building text-red', class: ''},*/
  {path: '/categoria', title: 'Categoria', icon: 'ni-building text-red', class: ''},
  {path: '/formulario', title: 'Formulario', icon: 'ni-building text-primary', class: ''},
  {path: '/item', title: 'Item', icon: 'ni-building text-yellow', class: ''},
  {path: '/rango', title: 'Rango', icon: 'ni-building text-black', class: ''},
  {path: '/subcategoria', title: 'Subcategoria', icon: 'ni-building text-purple', class: ''}
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public menuItems: any[];
  public menuItemsAdministrador: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.menuItemsAdministrador = ROUTES_ADIMINISTRADOR.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
