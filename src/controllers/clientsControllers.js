import { connectionDB } from "../database/db.js";

export default async function clientsControllers(req, res){
    const {name, address, phone} = req.body;

    try {
        await connectionDB.query(
            "INSERT INTO clients (name, address, phone) VALUES ($1, $2, $3)",
            [name, address, phone]
        )
        return res.sendStatus(201);
    }catch(err){
        return res.status(422).send(err.message);
    }
}