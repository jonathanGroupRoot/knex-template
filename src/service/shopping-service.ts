import { v4 as uuidV4 } from "uuid";

import { Shoping } from "../domain/shoping";
import { IShoppingService } from "./interfaces/shopping-service-interface";

export class ShoppingService implements IShoppingService {

    async saveShopping(): Promise<string> {
        const shoppingId = uuidV4();
        return shoppingId
    }
}
