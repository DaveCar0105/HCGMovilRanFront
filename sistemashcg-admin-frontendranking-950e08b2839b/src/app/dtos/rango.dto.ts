export interface RangoDto {
    id: number | string;
    fechaHoraRegistro?: Date;
    fechaHoraActualizacion?: Date;
    rangoNombre: string;
    minimo: number;
    maximo: number;
    cantidadDisminuir: number;
    estado: number;
}

export interface RangoCreateDto {
    rangoNombre: string;
    minimo: number;
    maximo: number;
    cantidadDisminuir: number;
}

export interface RangoUpdateDto {
    id: number | string;
    rangoNombre: string;
    minimo: number;
    maximo: number;
    cantidadDisminuir: number;
}