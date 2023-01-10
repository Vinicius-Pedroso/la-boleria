import { Router } from "express";

const ordersRoutes = Router()

ordersRoutes.get("/orders?date")
ordersRoutes.get("/orders/:id")

export default ordersRoutes;