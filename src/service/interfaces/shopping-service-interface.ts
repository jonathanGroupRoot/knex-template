import { Shoping } from "../../domain/shoping";

export interface IShoppingService {
    saveShopping(shopping: Shoping): Promise<void>;
}
