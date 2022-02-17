export interface TipoCajaDto {
    id: number | string;
    fechaHoraRegistro?: Date;
    fechaHoraActualizacion?: Date;
    tipoCajaNombre: string;
    estado: number;
}

export interface TipoCajaCreateDto {
    tipoCajaNombre: string;
}

export interface TipoCajaUpdateDto {
    id: number | string;
    tipoCajaNombre: string;
}