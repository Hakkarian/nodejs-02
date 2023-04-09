// here we're commonjs importing a httperror function
const ErrorHandler = require("./ErrorHandler");
const handleDublicationError = require('./handleDublicationError');


// and exporting it
module.exports = {
    ErrorHandler, handleDublicationError
}