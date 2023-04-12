const { ErrorHandler } = require("../helpers");

const handleEmailDublicationError = (error, req, next) => {
  if (error.code === 'E11000') {
    console.log('before')
    ErrorHandler(409, "Email in use");
    console.log('after')
  }
  console.log("here")
  next();
};

module.exports = handleEmailDublicationError;
