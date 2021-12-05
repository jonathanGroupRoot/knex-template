"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const awilix_1 = require("awilix");
const shoping_repository_1 = require("./repository/shoping-repository");
const shopping_service_1 = require("./service/shopping-service");
const definition = {
    // Service
    shoppingService: (0, awilix_1.asClass)(shopping_service_1.ShoppingService).singleton(),
    // Repository
    shoppingRepository: (0, awilix_1.asClass)(shoping_repository_1.ShoppingRepository).singleton(),
};
const container = (0, awilix_1.createContainer)().register(definition);
exports.default = container;
//# sourceMappingURL=container.js.map