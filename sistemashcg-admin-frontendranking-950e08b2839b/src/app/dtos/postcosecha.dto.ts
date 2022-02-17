export interface PostcosechaDto {
    id: number | string;
    fechaHoraRegistro?: Date;
    fechaHoraActualizacion?: Date;
    postcosechaNombre: string;
    idPostcosechaPadre: number | string;
    estado: number;
}

export interface PostcosechaCreateDto {
    postcosechaNombre: string;
    idPostcosechaPadre: number | string;
}

export interface PostcosechaUpdateDto {
    id: number | string;
    postcosechaNombre: string;
    idPostcosechaPadre: number | string;
}
