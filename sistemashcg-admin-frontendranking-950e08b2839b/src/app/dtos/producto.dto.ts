export interface ProductoDto {
    id: number | string;
    fechaHoraRegistro?: Date;
    fechaHoraActualizacion?: Date;
    productoNombre: string;
    estado: number;
}

export interface ProductoCreateDto {
    productoNombre: string;
}

export interface ProductoUpdateDto {
    id: number | string;
    productoNombre: string;
}
