import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRouter from "./Routes/AuthRoutes.js";
dotenv.config();


const app = express();

app.use(express.json());
app.use(cors());
app.use(authRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("server rodando a todo vapor!!");
});
