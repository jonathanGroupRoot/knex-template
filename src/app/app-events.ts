import { loadControllers, scopePerRequest } from "awilix-express";
import compression from "compression";
import express from "express";
import helmet from "helmet";

import container from "../container";

process.env.TZ = "America/Sao_Paulo";

const appEvents = express();

appEvents.disable("x-powered-by");
appEvents.use(compression());

appEvents.use(helmet());

appEvents.use(express.urlencoded({ extended: true }));
appEvents.use(express.json());

appEvents.use(scopePerRequest(container));
appEvents.use("/events*");

appEvents.use(
    loadControllers("./../api/controllers/events-controller.js", {
        cwd: __dirname,
    })
);

export default appEvents;
