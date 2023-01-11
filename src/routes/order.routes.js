import { Router } from "express";
import orderValidation from "../middlewares/orderValidation.js";
import { orderControllers } from "../controllers/ordersControllers.js";

const orderRoutes = Router()

orderRoutes.post("/order", orderValidation, orderControllers)

export default orderRoutes;