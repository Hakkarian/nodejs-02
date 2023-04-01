// the joi library for validation and ensuring that the data meets acceptible criteria before the using of app
const Joi = require("joi");

const { validateError } = require("../shared");

module.exports = {
    validateAddData: (req, res, next) => {
      // we're instanciating a Joi object for validation specific properties...
      const addSchema = Joi.object({
        // all properties are strings, and they are required
        name: Joi.string().required(),
        email: Joi.string().required(),
        phone: Joi.string().required(),
      });
        
    const { name, email, phone } = req.body;
    if (!name && !email && !phone) {
      validateError(req, addSchema, 400, "missing fields");
      next();
    }
        if (!name) {
            validateError(req, addSchema, 400, "missing required name field");
            next();
        }
        if (!email) {
            validateError(req, addSchema, 400, "missing required email field");
            next();
        }
        if (!phone) {
            validateError(req, addSchema, 400, "missing required phone field");
            next();
    }
    validateError(req, addSchema, 400, "missing fields");
    next();
    },
    validatePutData: (req, res, next) => {
      // we're instanciating a Joi object for validation specific properties...
      const addSchema = Joi.object({
        // all properties are strings, and they are required
        name: Joi.string().optional(),
        email: Joi.string().optional(),
        phone: Joi.string().optional()
      });
      const { name, email, phone } = req.body;
      if (!name && !email && !phone) {
        validateError(req, addSchema, 400, "missing fields");
        next();
      }
      validateError(req, addSchema, 400, "missing fields");
      next();
    }
}