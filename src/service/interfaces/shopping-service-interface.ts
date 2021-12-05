import { Shoping } from "../../domain/shoping";

export interface IShoppingService {
    saveShopping(): Promise<string>;
}
