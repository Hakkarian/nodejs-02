const Joi = require("joi");
const { validateError } = require("../helpers");
const { emailRegexp } = require("../models");

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
      && validateError(req, addSchema, 400, "missing fields")
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
    next();
  },
  validateRegSchema: (req, res, next) => {
    const schema = Joi.object({
      email: Joi.string().pattern(emailRegexp).required(),
      password: Joi.string().min(6).required(),
    });
    const { email, password} = req.body;
    !email && !password
      ? validateError(req, schema, 400, "missing fields")
      : !email ?
        validateError(req, schema, 400, "Email is required.")
      : !password &&
        validateError(req, schema, 400, "Password is required.");
    next();
  },
  validateEmailSchema: (req, res, next) => {
    const schema = Joi.object({
      email: Joi.string().pattern(emailRegexp).required()
    })
    !req.body.email && validateError(req, schema, 400, 'missing required field email')
    next()
  },
  validateLogSchema: (req, res, next) => {
    const schema = Joi.object({
      email: Joi.string().pattern(emailRegexp).required(),
      password: Joi.string().min(6).required(),
    });
    const { email, password } = req.body;
    !email && !password
      ? validateError(req, schema, 400, "missing fields")
      : !email
      ? validateError(req, schema, 400, "missing required field email")
      : !password && validateError(req, schema, 400, "missing required field password");
    next();
  },
  validateSubSchema: (req, res, next) => {
    const schema = Joi.object({
      subscription: Joi.string().required()
    })

    const { subscription } = req.body;

    !subscription && validateError(req, schema, 400, "missing required subscription field")

    next()
  }
};
