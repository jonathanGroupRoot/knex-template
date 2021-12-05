import { v4 as uuidV4 } from "uuid";

import { Shoping } from "../domain/shoping";
import { IShoppingService } from "./interfaces/shopping-service-interface";

export class ShoppingService implements IShoppingService {
    private shoppingService: IShoppingService;

    constructor({ shoppingService }) {
        this.shoppingService = shoppingService;
    }

    async saveShopping({
        name,
        shoppingCode,
        postalCode,
        publicPlace,
        number,
        supplement,
        district,
        city,
        state,
        phoneNumber,
        imageURL,
        description,
        status,
    }: Shoping): Promise<void> {
        const shoppingId = uuidV4();

        const shoppingCreate = {
            id: shoppingId,
            name,
            shoppingCode,
            postalCode,
            publicPlace,
            number,
            supplement,
            district,
            city,
            state,
            phoneNumber,
            imageURL,
            description,
            status,
        };

        await this.shoppingService.saveShopping(shoppingCreate);
    }
}
