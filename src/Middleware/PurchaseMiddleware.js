import { purchaseSchema } from "../Schemas/PurchaseSchema.js";


export async function purchaseSchemaValidation(req, res, next) {
    const { name, street, number, city, uf, cep, paymentMethod, items} = req.body;
    const newNumber = Number(number)
   
    try {
        const { error } = purchaseSchema.validate({name, street, number: newNumber, city, uf, cep, paymentMethod, items}, { abortEarly: false });
        if (error) return res.status(422).send(error.details[0].message);


        next();
    } catch (error) {
        console.error(error);
        res.status(500).send('Algo deu errado no servidor!');
    }
}