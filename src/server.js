import express from "express";
import cors from 'cors';
import orderRoutes from "./routes/order.routes.js";
import ordersRoutes from "./routes/orders.routes.js";
import cakesRoutes from "./routes/cakes.routes.js";
import clientsRoutes from "./routes/clients.routes.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use(cakesRoutes);
app.use(ordersRoutes);
app.use(clientsRoutes);
app.use(orderRoutes);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server running in port: ${port}`));