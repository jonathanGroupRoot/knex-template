import { POST, route } from "awilix-express";
import { Request, Response } from "express";

import { IShoppingService } from "../../service/interfaces/shopping-service-interface";

@route("/shopping")
export class ShoppingController {
    private shoppingService: IShoppingService;

    constructor({ shoppingService }) {
        this.shoppingService = shoppingService;
    }

    @POST()
    async createShopping(
        request: Request,
        response: Response
    ): Promise<Response> {
        const shopping = request.body;

        await this.shoppingService.saveShopping(shopping);

        return response.status(201).send();
    }
}
