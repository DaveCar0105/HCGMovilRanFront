import { CategoriaDto } from "./categoria.dto";
import { ItemDto } from "./item.dto";

export interface SubcategoriaDto {
    id: number | string;
    fechaHoraRegistro?: Date;
    fechaHoraActualizacion?: Date;
    subcategoriaNombre: string;
    idCategoria: number | string;
    estado: number;
    categoria?: CategoriaDto;
    items?: ItemDto[];
}

export interface SubcategoriaCreateDto {
    subcategoriaNombre: string;
    idCategoria: number | string;
}

export interface SubcategoriaUpdateDto {
    id: number | string;
    subcategoriaNombre: string;
    idCategoria: number | string;
}