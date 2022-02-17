export interface PaisDto {
    id: number | string;
    fechaHoraRegistro?: Date;
    fechaHoraActualizacion?: Date;
    paisNombre: string;
    estado: number;
}

export interface PaisCreateDto {
    paisNombre: string;
}

export interface PaisUpdateDto {
    id: number | string;
    paisNombre: string;
}
