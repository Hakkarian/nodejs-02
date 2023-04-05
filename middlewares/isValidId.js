const { isValidObjectId } = require('mongoose');

const ErrorHandler = require('../helpers')

const isValidId = (req, res, next) => {
    const { contactId } = req.params;
    console.log(isValidObjectId(contactId));
    if (!isValidObjectId(contactId)) {
        console.log("here!")
        next(ErrorHandler(400, 'Not a valid id'))
    }
    next()
}

module.exports = isValidId