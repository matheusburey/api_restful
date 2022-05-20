import cors from "cors";
import express, { json } from "express";

import router from "./routes";

const app = express();

app.use(cors());
app.use(json());

app.use("/api/v1", router);

export default app;
