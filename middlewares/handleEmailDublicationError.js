const { ErrorHandler } = require("../helpers");

module.exports = {
  handleEmailDublicationError: (error, req, next) => {
    console.log(error.code === 11000)
    if (error.code === 11000) {
      next(ErrorHandler(409, "Email in use"));
    }

    next();
  }
}

