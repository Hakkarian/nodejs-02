// here we're commonjs importing a httperror function
const ErrorHandler = require("./ErrorHandler");
const validateError = require('./validateError');

const ctrlWrapper = require('./controllerWrapper');

// and exporting it
module.exports = {
    ErrorHandler,  ctrlWrapper, validateError
}