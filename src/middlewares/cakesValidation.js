import cakesSchema from "../models/cakes.schema.js"

export default function cakesValidation(req, res, next){
  const cakeData = req.body;

  const { error } = cakesSchema.validate(cakeData, { abortEarly: false });

  if (error) {
    const errors = error.details.map((detail) => detail.message);
    return res.status(400).send(errors);
  }

  next()
}