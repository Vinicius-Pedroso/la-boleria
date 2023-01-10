import { Router } from "express";
import orderValidation from "../middlewares/orderValidation";
import orderControllers from "../controllers/orderControllers.js";

const orderRoutes = Router()

orderRoutes.post("/order", orderValidation, orderControllers)

export default orderRoutes;