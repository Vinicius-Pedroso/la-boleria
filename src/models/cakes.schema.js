import joi from 'joi'

const cakesSchema = joi.object({
    name: joi.required().string().min(2),
    price: joi.required().number().positive(),
    image: joi.required().string().uri(),
	description: joi.required().string()
})

export default cakesSchema;