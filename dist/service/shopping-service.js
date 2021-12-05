"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingService = void 0;
const uuid_1 = require("uuid");
class ShoppingService {
    constructor({ shoppingService }) {
        this.shoppingService = shoppingService;
    }
    async saveShopping({ name, shoppingCode, postalCode, publicPlace, number, supplement, district, city, state, phoneNumber, imageURL, description, status, }) {
        const shoppingId = (0, uuid_1.v4)();
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
exports.ShoppingService = ShoppingService;
//# sourceMappingURL=shopping-service.js.map