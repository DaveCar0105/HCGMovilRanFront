import { FormularioItemDto } from "./formulario-item.dto";

export interface FormularioDto {
    id: number | string;
    fechaHoraRegistro?: Date;
    fechaHoraActualizacion?: Date;
    formularioNombre: string;
    formularioNombreDesplazar: string;
    estado: number;
    formularioItems?: FormularioItemDto[];
}

export interface FormularioCreateDto {
    formularioNombre: string;
    formularioNombreDesplazar: string;
    formularioItems?: FormularioItemDto[];
}
