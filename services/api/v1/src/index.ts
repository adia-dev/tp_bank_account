import express, { Request, Response, Express } from "express";
import dotenv from "dotenv";
import pg from "pg";
const cors = require("cors");

dotenv.config();
const app: Express = express();
const port = process.env.PORT || 4000;

app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Hello World !");
});

app.listen(port, () => {
  console.log(`Server listening at port: ${port}`);
});
