import joi from 'joi'

const orderSchema = joi.object({
    clientId: joi.required().number(),
    cakeId: joi.required().number(),
    quantity: joi.required().number().positive().max(4),
	totalPrice: joi.required().number()
})

export default orderSchema;