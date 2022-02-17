export interface CargueraDto {
    id: number | string;
    fechaHoraRegistro?: Date;
    fechaHoraActualizacion?: Date;
    cargueraNombre: string;
    estado: number;
}

export interface CargueraCreateDto {
    cargueraNombre: string;
}

export interface CargueraUpdateDto {
    cargueraNombre: string;
}