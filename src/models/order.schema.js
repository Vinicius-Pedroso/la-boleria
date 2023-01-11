import joi from 'joi'

const orderSchema = joi.object({
    clientId: joi.number().integer().required(),
    cakeId: joi.number().integer().required(),
    quantity: joi.number().positive().max(4).integer().required(),
	totalPrice: joi.number().required()
})

export default orderSchema;