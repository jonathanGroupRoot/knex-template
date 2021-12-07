import { loadControllers, scopePerRequest } from "awilix-express";
import compression from "compression";
import express from "express";
import helmet from "helmet";

import container from "../container";

process.env.TZ = "America/Sao_Paulo";

const appShopping = express();

appShopping.disable("x-powered-by");
appShopping.use(compression());

appShopping.use(helmet());

appShopping.use(express.urlencoded({ extended: true }));
appShopping.use(express.json());

appShopping.use(scopePerRequest(container));
appShopping.use("/shopping*");

appShopping.use(
    loadControllers("./../api/controllers/shopping-controller.js", {
        cwd: __dirname,
    })
);

export default appShopping;
