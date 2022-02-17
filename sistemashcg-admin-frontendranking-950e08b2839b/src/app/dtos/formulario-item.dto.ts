import { ItemDto } from "./item.dto";

export interface FormularioItemDto {
    id?: number | string;
    idFormulario: number | string;
    idItem: number | string;
    item?: ItemDto;
}
