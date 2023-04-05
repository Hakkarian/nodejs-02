const Joi = require('joi');
const { validateError } = require('../shared/validateError');



module.exports = {
  validateAddSchema: (req, res, next) => {
    // we're instanciating a Joi object for validation specific properties...
    const addSchema = Joi.object({
      // all properties are strings, and they are required
      name: Joi.string().required(),
      email: Joi.string().required(),
      phone: Joi.string().required(),
    });
    const { name, email, phone, favorite } = req.body;
    !name && !email && !phone && !favorite
      ? validateError(req, addSchema, 400, "missing fields")
      : !name
      ? validateError(req, addSchema, 400, "missing required name field")
      : !email
      ? validateError(req, addSchema, 400, "missing required email field")
      : !phone &&
        validateError(req, addSchema, 400, "missing required phone field");
    next();
  },
  validatePutSchema: (req, res, next) => {
    // we're instanciating a Joi object for validation specific properties...
    const addSchema = Joi.object({
      // all properties are strings, and they are required
      name: Joi.string().required(),
      email: Joi.string().required(),
      phone: Joi.string().required(),

    });
    const { name, email, phone, favorite } = req.body;
    !name &&
      !email &&
      !phone &&
      !favorite &&
      validateError(req, addSchema, 400, "missing fields");
    next();
  },
  validateFavoriteSchema: (req, res, next) => {
    const schema = Joi.object({
      favorite: Joi.boolean().required(),
    });
    const { favorite } = req.body;
    console.log(!favorite)
      if (!favorite) {
          validateError(req, schema, 400, "missing field favorite");
          next()
      }  
      console.log("validateFavorite")
    next();
  },
};