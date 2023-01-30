import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRouter from "./Routes/AuthRoutes.js";
import homeRouter from "./Routes/HomeRoute.js";
import purchaseRouter from "./Routes/PurchaseRoute.js";
dotenv.config();

const app = express();
app.use(json());
app.use(cors());
app.use([authRouter, homeRouter, purchaseRouter]);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("server rodando a todo vapor!!");
});
