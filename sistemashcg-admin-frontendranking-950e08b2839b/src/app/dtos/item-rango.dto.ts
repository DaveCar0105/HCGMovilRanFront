import { RangoDto } from "./rango.dto";
import { ItemDto } from "./item.dto";

export interface ItemRangoDto {
    id?: number | string;
    fechaHoraRegistro?: Date;
    fechaHoraActualizacion?: Date;
    orden: number;
    idItem: number | string;
    idRango: number | string;
    item?: ItemDto;
    rango?: RangoDto;
}

export interface ItemRangoCreateDto {
    orden: number;
    idItem: number | string;
    idRango: number | string;
}
