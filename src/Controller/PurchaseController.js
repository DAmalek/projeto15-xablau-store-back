import db from "../Config/database.js";


export async function purchase(req, res){
    const user = res.locals.user;
    const { name, street, number, city, uf, cep, paymentMethod, items} = req.body;
    const newNumber = Number(number)

    try {
        await db.collection("purchases").insertOne({name, userId:user._id, street, number: newNumber, city, uf, cep, paymentMethod, items});
        res.status(200).send("Compra realizada com sucesso!")
    } catch (error) {
        console.error(error);
        res.status(500).send('Algo deu errado no servidor!');
    }
}