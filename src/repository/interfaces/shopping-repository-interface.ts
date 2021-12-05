import { Shoping } from "../../domain/shoping";

export interface IShoppingRepository {
    saveShopping(shopping: Shoping): Promise<void>;
}
