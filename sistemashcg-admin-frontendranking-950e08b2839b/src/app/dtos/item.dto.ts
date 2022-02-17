import { SubcategoriaDto } from "./subcategoria.dto";
import { ItemRangoDto } from "./item-rango.dto";

export interface ItemDto {
    id: number | string;
    fechaHoraRegistro?: Date;
    fechaHoraActualizacion?: Date;
    itemNombre: string;
    idSubcategoria: number | string;
    estado: number;
    subcategoria?: SubcategoriaDto[];
    itemsRango? : ItemRangoDto[];
}

export interface ItemCreateDto {
    itemNombre: string;
    idSubcategoria: number | string;
}

export interface ItemUpdateDto {
    id: number | string;
    itemNombre: string;
    idSubcategoria: number | string;
}
