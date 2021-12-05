"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_local_1 = __importDefault(require("./app/app-local"));
const port = 3000;
app_local_1.default.listen(port, () => console.log(`Servidor executando na porta ${port}`));
//# sourceMappingURL=server.js.map