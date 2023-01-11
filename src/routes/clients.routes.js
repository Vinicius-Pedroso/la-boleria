import { Router } from "express";
import clientsValidation from "../middlewares/clientsValidation.js";
import clientsControllers from "../controllers/clientsControllers.js";
import { getOrdersByClient } from "../controllers/ordersControllers.js";

const clientsRoutes = Router()

clientsRoutes.post("/clients", clientsValidation, clientsControllers)
clientsRoutes.get("/clients/:id/orders", getOrdersByClient)

export default clientsRoutes;