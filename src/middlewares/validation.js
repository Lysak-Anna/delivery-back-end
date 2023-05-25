const Joi = require("joi");
const { BadRequestError } = require("../helpers/errorHandler");

function validateOrderData(req, res, next) {
  const schema = Joi.object({
    name: Joi.string()
      .required()
      .pattern(/^(?=.{2,30}$)[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$/),
    email: Joi.string().required().email(),
    phone: Joi.string()
      .required()
      .pattern(/^[0-9]+$/, "numbers")
      .min(10)
      .max(12),
    address: Joi.string().required().min(10),
    order: Joi.array(),
    token: Joi.string(),
  });

  const validatedData = schema.validate(req.body);
  if (validatedData.error) {
    throw new BadRequestError(validatedData.error.details[0].message);
  }
  next();
}

module.exports = {
  validateOrderData,
};
