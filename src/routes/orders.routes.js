import { Router } from "express";

const ordersRoutes = Router()

ordersRoutes.get("/orders")
ordersRoutes.get("/orders/:id")

export default ordersRoutes;