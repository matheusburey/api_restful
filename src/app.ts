import cors from "cors";
import express, { json } from "express";

import roter from "./routes";

const app = express();

app.use(json());
app.use(cors());

app.use(roter);

export default app;
