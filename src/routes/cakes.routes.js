import { Router } from "express";
import cakesControllers from "../controllers/cakesControllers.js";
import cakesValidation from "../middlewares/cakesValidation.js";

const cakesRoutes = Router()

cakesRoutes.post("/cakes", cakesValidation, cakesControllers)

export default cakesRoutes;