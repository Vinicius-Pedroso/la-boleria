import { connectionDB } from "../database/db.js";

export default async function orderControllers(req, res){
    const {clientId, cakeId, quantity, totalPrice} = req.body;

    try {
        const clientIdValidation = await connectionDB.query("SELECT * FROM clients WHERE id=$1",
            [clientId]
        )
        if(!clientIdValidation){
            return res.sendStatus(404);
        }
        const cakeIdValidation = await connectionDB.query("SELECT * FROM cakes WHERE id=$1",
            [cakeId]
        )
        if(!cakeIdValidation){
            return res.sendStatus(404);
        }
        const createdAt = dayjs.now()
        await connectionDB.query(
            "INSERT INTO orders (clientId, cakeId, quantity, createdAt, totalPrice) VALUES ($1, $2, $3, $4, $5)",
            [clientId, cakeId, quantity, createdAt, totalPrice]
        )
        return res.sendStatus(201);
    }catch(err){
        return res.status(422).send(err.message);
    }
}
