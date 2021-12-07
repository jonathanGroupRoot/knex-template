import { v4 as uuidV4 } from "uuid";

import { Shoping } from "../domain/shoping";
import { IShoppingRepository } from "../repository/interfaces/shopping-repository-interface";
import { IShoppingService } from "./interfaces/shopping-service-interface";

export class ShoppingService implements IShoppingService {
    private shoppingRepository: IShoppingRepository;

    constructor({ shoppingRepository }) {
        this.shoppingRepository = shoppingRepository;
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
        await this.shoppingRepository.saveShopping({
            id: uuidV4(),
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
        });
    }
}
