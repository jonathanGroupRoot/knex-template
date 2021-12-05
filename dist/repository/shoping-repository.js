"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingRepository = void 0;
const knex_1 = __importDefault(require("knex"));
class ShoppingRepository {
    constructor() {
        this.db = knex_1.default;
        this.tableName = "shoopings";
    }
    async saveShopping(shopping) {
        await this.db(this.tableName).insert(shopping);
    }
}
exports.ShoppingRepository = ShoppingRepository;
//# sourceMappingURL=shoping-repository.js.map