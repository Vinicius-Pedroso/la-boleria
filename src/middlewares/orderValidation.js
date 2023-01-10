import orderSchema from "../models/order.schema.js"

export default function orderValidation(req, res, next){
  const orderData = req.body;

  const { error } = orderSchema.validate(orderData, { abortEarly: false });

  if (error) {
    const errors = error.details.map((detail) => detail.message);
    return res.status(422).send(errors);
  }

  next()
}