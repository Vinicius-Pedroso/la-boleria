import { Router } from "express";
import { getOrderById, getOrders } from "../controllers/ordersControllers";

const ordersRoutes = Router()

ordersRoutes.get("/orders?date", getOrders)
ordersRoutes.get("/orders/:id", getOrderById)

export default ordersRoutes;