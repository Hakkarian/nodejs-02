// handleDublicationError.js
const ErrorHandler = require("./ErrorHandler");

const handleDublicationError = (error, res, next) => {
    error.message.includes("name_1") && next(ErrorHandler(400, "Property name must be unique"));
    error.message.includes("email_1") && next(ErrorHandler(400, "Property email must be unique"));
    error.message.includes("phone_1") && next(ErrorHandler(400, "Property phone must be unique"));
    next();
};

module.exports = handleDublicationError;