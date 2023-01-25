import db from "../Config/database.js";
import { loginSchema, userSchema } from "../Schemas/AuthSchemas.js";
import { v4 as uuid } from 'uuid';
import bcrypt from 'bcrypt';

export async function userValidation(req, res, next) {
    const {name, email, password, confirm_password} = req.body;

    try {
        const { error } = userSchema.validate({name, email, password, confirm_password}, { abortEarly: false });
    
        if (error) return res.status(422).send(error.details[0].message);
    
        const userExists = await db.collection("users").findOne({ email});
        if (userExists) return res.status(409).send('Usuário já cadastrado!');

        next();
    } catch (error) {
        console.error(error);
        res.status(500).send('Algo deu errado no servidor!');
    }
}

export async function loginValidation(req, res, next) {
    const {email, password} = req.body;

    try {
        const { error } = loginSchema.validate({email, password}, { abortEarly: false });
        if (error) return res.status(422).send(error.details[0].message);
    
        const user = await db.collection('users').findOne({ email });
        if(!user  || (user && !bcrypt.compareSync(password, user.password))) return res.status(404).send("Usuário ou senha incorretos!");
        
        const logged = await db.collection("sessions").findOne({userId: user._id});
        if (logged) {
            const token = uuid();
            await db.collection("sessions").updateOne({ name: logged.name }, 
            {
                $set: {
                    token
                }
            });
            return res.send({token, name: user.name});
        }

        res.locals.user = user;

        next();
    } catch (error) {
        console.error(error);
        res.status(500).send('Algo deu errado no servidor!');
    }
}