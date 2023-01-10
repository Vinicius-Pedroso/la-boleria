import clientsSchema from "../models/clients.schema.js"

export default function clientsValidation(req, res, next){
  const clientsData = req.body;

  const { error } = clientsSchema.validate(clientsData, { abortEarly: false });

  if (error) {
    const errors = error.details.map((detail) => detail.message);
    return res.status(400).send(errors);
  }

  next()
}