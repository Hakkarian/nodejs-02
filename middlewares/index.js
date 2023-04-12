const {
  validateAddSchema,
  validatePutSchema,
  validateFavoriteSchema,
} = require("./validateData");

const isValidId = require("./isValidId");
const handleContactDublicationError = require("./handleContactDublicationError");
const handleEmailDublicationError = require('./handleEmailDublicationError');
const authenticate = require("./authenticate");

module.exports = {
  validateAddSchema,
  validatePutSchema,
  validateFavoriteSchema,
  isValidId,
  authenticate,
    handleContactDublicationError,
  handleEmailDublicationError
};
