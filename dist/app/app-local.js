"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const awilix_express_1 = require("awilix-express");
const compression_1 = __importDefault(require("compression"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const container_1 = __importDefault(require("../container"));
require("../seeds/shopping");
process.env.TZ = "America/Sao_Paulo";
const app = (0, express_1.default)();
app.disable("x-powered-by");
app.use((0, compression_1.default)());
app.use((0, helmet_1.default)());
app.use("/stores/:shoppingCode/:storeId/promotions/:promotionId", (0, cors_1.default)({
    origin: "http://0.0.0.0:5000",
    methods: "PATCH",
}));
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
}));
app.use(express_1.default.json({
    limit: "50mb",
}));
app.use((0, awilix_express_1.scopePerRequest)(container_1.default));
app.use((0, awilix_express_1.loadControllers)("./../api/controllers/*.js", { cwd: __dirname }));
exports.default = app;
//# sourceMappingURL=app-local.js.map