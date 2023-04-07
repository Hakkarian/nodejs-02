const { isValidObjectId } = require('mongoose');

const ErrorHandler = require('../helpers')

const isValidId = (req, res, next) => {
    const { contactId } = req.params;
    console.log(isValidObjectId(contactId));
    if (!isValidObjectId(contactId)) {
        console.log("here!")
        next(ErrorHandler(400, 'Not found'))
    }
    next()
}

module.exports = isValidId