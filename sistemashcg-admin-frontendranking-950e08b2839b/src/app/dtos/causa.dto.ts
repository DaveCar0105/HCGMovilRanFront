export interface CausaDto {
    id: number | string;
    fechaHoraRegistro?: Date;
    fechaHoraActualizacion?: Date;
    causaNombre: string;
    estado: number;
}

export interface CausaCreateDto {
    causaNombre: string;
}

export interface CausaUpdateDto {
    id: number | string;
    causaNombre: string;
}
