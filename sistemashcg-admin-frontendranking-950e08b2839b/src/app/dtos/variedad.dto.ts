import { ProductoDto } from "./producto.dto";

export interface VariedadDto {
    id: number | string;
    fechaHoraRegistro?: Date;
    fechaHoraActualizacion?: Date;
    variedadNombre: string;
    idProducto: number | string;
    estado: number;
    producto?: ProductoDto[];
}

export interface VariedadCreateDto {
    variedadNombre: string;
    idProducto: number | string;
}

export interface VariedadUpdateDto {
    id: number | string;
    variedadNombre: string;
    idProducto: number | string;
}
