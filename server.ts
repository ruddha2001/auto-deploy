require("dotenv").congif();

import express from "express";
import cors from "cors";
import http from "http";
import { payloadHandler } from "./route";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/*", payloadHandler());

http.createServer(app).listen(parseInt(process.env.PORT!), function () {
  console.log("Server started at Port " + process.env.PORT);
});
