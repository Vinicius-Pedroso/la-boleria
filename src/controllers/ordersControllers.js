import { connectionDB } from "../database/db.js";
import { useParams } from "react-router-dom";

export async function orderControllers(req, res){
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

export async function getOrders(req,res){
    const date = useParams().date
    
    try{
        if(date){
            const ordersData = await connectionDB.query(
                `SELECT o.id, o.createdAt, o.quantity, o.totalPrice,
                u.id, u.name, u.address, u.phone,
                c.id, c.name, c.price, c.description, c.image
                FROM orders o
                    WHERE o.createdAt=$1
                    INNER JOIN clients u
                        ON o.clientId = u.id
                    INNER JOIN cakes c
                        ON o.cakesId = c.id`,
                [date]
            )
            if(!ordersData){
                return res.status(404).send([])
            }
            return res.status(200).send(ordersData)
        }
        const ordersData = await connectionDB.query(
            `SELECT o.id, o.createdAt, o.quantity, o.totalPrice,
            u.id, u.name, u.address, u.phone,
            c.id, c.name, c.price, c.description, c.image
            FROM orders o
                INNER JOIN clients u
                    ON o.clientId = u.id
                INNER JOIN cakes c
                    ON o.cakesId = c.id`
        )
        if(!ordersData){
            return res.status(404).send([])
        }
        return res.status(200).send(ordersData)
    }catch(err){
        return res.status(422).send(err.message);
    }
}

export async function getOrderById(req,res){
    const id = useParams().id

    if(!id){
        return res.status(404)
    }
    
    try{
        if(date){
            const ordersData = await connectionDB.query(
                `SELECT o.id, o.createdAt, o.quantity, o.totalPrice,
                u.id, u.name, u.address, u.phone,
                c.id, c.name, c.price, c.description, c.image
                FROM orders o
                    WHERE o.id=$1
                    INNER JOIN clients u
                        ON o.clientId = u.id
                    INNER JOIN cakes c
                        ON o.cakesId = c.id`,
                [id]
            )
            if(!ordersData){
                return res.status(404).send([])
            }
            return res.status(200).send(ordersData)
        }
    }catch(err){
        return res.status(422).send(err.message);
    }

}