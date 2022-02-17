import { Injectable } from '@angular/core';
import { AppConstant, AppConstantMessaga } from '../app.constant';

@Injectable({
  providedIn: 'root'
})
export class UtilitarioService {

  constructor() { }

  returnEstadoEntity(id: number | string){
    switch(id){
      case 1: 
        return AppConstant.ENTIDAD_TEXT_HABILITADO;
      case 2:
        return AppConstant.ENTIDAD_TEXT_DESHABILITADO;
      case '1': 
        return AppConstant.ENTIDAD_TEXT_HABILITADO;
      case '2':
        return AppConstant.ENTIDAD_TEXT_DESHABILITADO;
      default:
        return AppConstant.TEXT_SIN_INFORMACION;
    }
  }

  getDateString(fechaString:string): string{
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    if(fechaString!=null && fechaString!=""){
      try{
        const fecha = new Date(fechaString);
        return fecha.toLocaleDateString('es-ES', options);
      }catch(e){
        return "Fecha Incorrecta";
      }
    } else {
      return AppConstant.TEXT_SIN_INFORMACION;
    }
  }
}
