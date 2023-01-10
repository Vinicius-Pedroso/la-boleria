import joi from 'joi'

const clientsSchema = joi.object({
    name: joi.required().string().min(3),
    address: joi.required().string(),
    phone: joi.required().string().min(10).max(11)
})

export default clientsSchema;