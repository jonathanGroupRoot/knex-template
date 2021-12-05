"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingController = void 0;
const awilix_express_1 = require("awilix-express");
let ShoppingController = class ShoppingController {
    constructor({ shoppingService }) {
        this.shoppingService = shoppingService;
    }
    async createShopping(request, response) {
        const shopping = request.body;
        await this.shoppingService.saveShopping(shopping);
        return response.status(201).send();
    }
};
__decorate([
    (0, awilix_express_1.POST)()
], ShoppingController.prototype, "createShopping", null);
ShoppingController = __decorate([
    (0, awilix_express_1.route)("/shopping")
], ShoppingController);
exports.ShoppingController = ShoppingController;
//# sourceMappingURL=shopping-controller.js.map