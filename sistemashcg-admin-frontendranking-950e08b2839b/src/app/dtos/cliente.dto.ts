export interface ClienteDto {
    id: number | string;
    fechaHoraRegistro?: Date;
    fechaHoraActualizacion?: Date;
    clienteNombre: string;
    estado: number;
}

export interface ClienteCreateDto {
    clienteNombre: string;
}

export interface ClienteUpdateDto {
    id: number | string;
    clienteNombre: string;
}