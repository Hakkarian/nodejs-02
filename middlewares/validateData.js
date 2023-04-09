const Joi = require('joi');
const { validateError } = require('../shared/validateError');
const { emailRegexp } = require('../models/user');



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
    if (!name) {
      validateError(req, addSchema, 400, "missing required name field");
    }
    !name && !email && !phone && !favorite
      ? validateError(req, addSchema, 400, "missing fields")
      : !name
      ? validateError(req, addSchema, 400, "missing required name field")
      : !email
      ? validateError(req, addSchema, 400, "missing required email field")
      : !phone &&
          validateError(req, addSchema, 400, "missing required phone field");
    validateError(req, addSchema, 400, "One of parameters already exists")
    next();
  },
  validatePutSchema: (req, res, next) => {
    const addSchema = Joi.object({
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
    if (!favorite) {
      validateError(req, schema, 400, "missing field favorite");
      next();
    }
    console.log("validateFavorite");
    next();
  },
  validateRegSchema: (req, res, next) => {
    const schema = Joi.object({
      name: Joi.string().required(),
      email: Joi.string().pattern(emailRegexp).required(),
      password: Joi.string().min(6).required(),
    });
    validateError(req, schema, 400, "error");
    next();
  },
  validateLogSchema: (req, res, next) => {
    const schema = Joi.object({
      email: Joi.string().pattern(emailRegexp).required(),
      password: Joi.string().min().required(),
    });
    validateError(req, schema, 400, "error");
    next();
  },
};