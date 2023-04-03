const ErrorHandler = require('../helpers')

const validateError = (req, addSchema, status, string) => {
  // destructuring an error from validated new object with fresh values, in order to check...
  const { error } = addSchema.validate(req.body);
  // if passed data is incorrect...
  if (error) {
    // ...skip further instructions, display the message (based on status) and move to the catch block.
    throw ErrorHandler(status, string);
  }
};

module.exports = {
    validateError
}
