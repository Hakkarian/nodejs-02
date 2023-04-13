// we're creating a function-wrapper, where...
const ctrlWrapper = ctrl => {
    // ...function wraps an asynchronic function, which sends parameters to the controller function
    const plcholder = async (req, res, next) => {
        // we're covering this controller with try and catch block
        try {
            // we're calling for a controller, such as getAllContacts, addContact and so on
            await ctrl(req, res, next)
        } catch (error) {
          // my favorite part. Basically, calling the next function means to skip all further instructions inside the loop and going to the next route handler.
          // But here we have  next(error) with passed error argument, which means that we're calling to the next middleware function,
          // which includes an "error" and thus contains FOUR parameters(error, req, res, next).
          // In the project can be only one middleware for the sake of simplicity
          // exact path to the error handler - app.js, 21 row
          next(error);
        }
    }
    // and returning a controller in order to get the result
    return plcholder
}

module.exports = ctrlWrapper
