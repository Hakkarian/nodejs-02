// const { ErrorHandler } = require("../helpers");

const handleContactDublicationError = (error, req, next) => {
  console.log(error.message)
  // error.message.includes("name") &&
  //   next(ErrorHandler(400, "Property name must be unique"));
  //       error.message.includes("email") &&
  //         next(ErrorHandler(400, "Property email must be unique"));
  //       error.message.includes("phone") &&
  //         next(ErrorHandler(400, "Property phone must be unique"));
    next();
};

module.exports = handleContactDublicationError;