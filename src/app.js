import express from "express";
import cors from "cors";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

const app = express();

app.use(express.json());
app.use(cors());

dotenv.config();

const mongoClient = new MongoClient();

app.listen(process.env.PORT, () => {
  console.log("server rodando a todo vapor!!");
});
