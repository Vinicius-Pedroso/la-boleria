import { connectionDB } from "../database/db.js";

export default async function cakesControllers(req, res){
    const {name, price, image, description} = req.body;

    try {

        const cakeNameValidation = await connectionDB.query("SELECT * FROM cakes WHERE name=$1",
            [name]
        )
        if(cakeNameValidation){
            return res.sendStatus(409);
        }
        await connectionDB.query(
            "INSERT INTO cakes (name, price, image, description) VALUES ($1, $2, $3, $4)",
            [name, price, image, description]
        )
        return res.sendStatus(201);
    }catch(err){
        return res.send(err.message);
    }
}
