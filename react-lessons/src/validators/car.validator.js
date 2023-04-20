import Joi from 'joi'

const carValidator = Joi.object({
    brand:Joi.string().regex(/^[a-zA-Za-яА-яёЁіІїЇ]{1,20}$/).required().messages({
        'string.pattern.basa':'помилка',
        'string.required':'це поле обов\`язкове'
    }),
    price:Joi.number().min(0).max(1000000).required(),
    year:Joi.number().min(1990).max(new Date().getFullYear()).required
})

export {
    carValidator
}