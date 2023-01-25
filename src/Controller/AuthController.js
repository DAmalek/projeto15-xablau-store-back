import bcrypt from 'bcrypt';
import { v4 as uuidV4 } from 'uuid';
import db from "../Config/database.js";

export async function signUp(req, res){
    const {name, email, password} = req.body;
  
    try {

    const passwordHash = bcrypt.hashSync(password, 10);
    await db.collection("users").insertOne({name, email, password: passwordHash});

    res.status(201).send("Usuário cadastrado com sucesso!");
  } catch (error) {
    console.error(error);
    res.status(500).send('Algo deu errado no servidor!');
  }
}

export async function signIn(_, res) {
  const user = res.locals.user;

  const token = uuidV4();

  try {
    await db.collection("sessions").insertOne({ name: user.name, userId: user._id, token });
    res.send({ token, name: user.name});
  } catch (error) {
    console.error(error)
    res.status(500).send('Algo deu errado no servidor!')
  }

}
