import { Router } from "express";

const clientsRoutes = Router()

clientsRoutes.post("/clients")
clientsRoutes.ger("/clients/:id/orders")

export default clientsRoutes;