const {
  validateAddSchema,
  validatePutSchema,
  validateFavoriteSchema,
  validateRegSchema,
  validateEmailSchema,
  validateLogSchema,
  validateSubSchema
} = require("./validateData");

const isValidId = require("./isValidId");
const { handleEmailDublicationError } = require('./handleEmailDublicationError');
const {checkIfExists} = require('./checkIfExists')

const authenticate = require("./authenticate");
const upload = require('./upload');

module.exports = {
  validateAddSchema,
  validatePutSchema,
  validateFavoriteSchema,
  validateRegSchema,
  validateEmailSchema,
  validateLogSchema,
  validateSubSchema,
  isValidId,
  authenticate,
  upload,
  handleEmailDublicationError,
  checkIfExists
};
