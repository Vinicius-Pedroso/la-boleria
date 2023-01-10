import joi from 'joi'

const cakesSchema = joi.object({
    name: joi.required().string().min(3),
    price: joi.required().number(),
    image: joi.required().string().uri(),
	description: joi.required().string()
})

export default cakesSchema;