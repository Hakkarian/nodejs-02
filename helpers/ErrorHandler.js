// here you can find an error handler

// this object contains 4** http requests with consectuting messages
const errorMessages = {
  400: "Missing fields",
  401: "Not authorized",
  403: "Forbidden",
  404: "Not Found",
  409: "Conflict",
};

// in this function we're passing the status of error and message, based on the type of the highlihted status...
// important to note - if we're passing only one parameter to the function, we're returning also a second parameter as a placeholder-message, based on the type of the highlihted status...
const ErrorHandler = (status, message = errorMessages[status]) => {
  // ...creating an error variable, in which we're passing a status-message argument to the Error class
  const error = new Error(message);
  // in the status property of the error object we're passing a status...
  error.status = status;
  // ...and returning this object
  return error;
};
// and exporting him as HttpError function
module.exports = ErrorHandler;
