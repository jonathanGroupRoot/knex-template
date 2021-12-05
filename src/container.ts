import { asClass, createContainer } from "awilix";

import { ShoppingRepository } from "./repository/shoping-repository";
import { ShoppingService } from "./service/shopping-service";

const definition = {
    // Service
    shoppingService: asClass(ShoppingService).singleton(),

    // Repository
    shoppingRepository: asClass(ShoppingRepository).singleton(),
};

const container = createContainer();

container.register(definition)

export default container;
