export interface CategoriaDto {
    id: number | string;
    fechaHoraRegistro?: Date;
    fechaHoraActualizacion?: Date;
    categoriaNombre: string;
    estado: number;
}

export interface CategoriaCreateDto {
    categoriaNombre: string;
}

export interface CategoriaUpdateDto {
    id: number | string;
    categoriaNombre: string;
}
