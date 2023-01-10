import { Router } from "express";
import clientsValidation from "../middlewares/clientsValidation";
import clientsControllers from "../controllers/clientsControllers.js";

const clientsRoutes = Router()

clientsRoutes.post("/clients", clientsValidation, clientsControllers)
clientsRoutes.get("/clients/:id/orders")

export default clientsRoutes;