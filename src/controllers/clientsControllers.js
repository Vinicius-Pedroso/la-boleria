import { connectionDB } from "../database/db.js";

export default async function clientsControllers(req, res){
    const {} = req.body;

    try {
        await connectionDB.query(
        )
        return res.sendStatus(201);
    }catch(err){
        return res.status(400).send(err.message);
    }
}