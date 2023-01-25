import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

d;

app.listen(process.env.PORT, () => {
  console.log("server rodando a todo vapor!!");
});
