import { loadControllers, scopePerRequest } from "awilix-express";
import compression from "compression";
import cors from "cors";
import express from "express";
import helmet from "helmet";

import container from "../container";

import "../seeds/shopping";

process.env.TZ = "America/Sao_Paulo";

const app = express();

app.disable("x-powered-by");
app.use(compression());
app.use(helmet());

app.use(cors());
app.use(
    express.urlencoded({
        limit: "50mb",
        extended: true,
        parameterLimit: 50000,
    })
);

app.use(
    express.json({
        limit: "50mb",
    })
);

app.use(scopePerRequest(container));

app.use(loadControllers("../api/controllers/*.ts", { cwd: __dirname }));

export default app;
