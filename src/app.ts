import cors from "cors";
import express, { json } from "express";
import swaggerUI from "swagger-ui-express";

import router from "./routes";
import swaggerFile from "./swagger.json";

const app = express();

app.use(cors());
app.use(json());

app.use("/api/v1", router);

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));

export default app;
