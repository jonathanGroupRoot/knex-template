"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const awilix_express_1 = require("awilix-express");
const compression_1 = __importDefault(require("compression"));
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const container_1 = __importDefault(require("../container"));
process.env.TZ = "America/Sao_Paulo";
const appShopping = (0, express_1.default)();
appShopping.disable("x-powered-by");
appShopping.use((0, compression_1.default)());
appShopping.use((0, helmet_1.default)());
appShopping.use(express_1.default.urlencoded({ extended: true }));
appShopping.use(express_1.default.json());
appShopping.use((0, awilix_express_1.scopePerRequest)(container_1.default));
appShopping.use("/events*");
appShopping.use((0, awilix_express_1.loadControllers)("./../api/controllers/events-controller.js", {
    cwd: __dirname,
}));
exports.default = appShopping;
//# sourceMappingURL=app-shopping.js.map