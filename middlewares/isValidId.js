const { isValidObjectId } = require('mongoose');

const { ErrorHandler } = require('../helpers')

const isValidId = (req, res, next) => {
    const { contactId } = req.params;
    if (!isValidObjectId(contactId)) {
        next(ErrorHandler(404, 'Not found'))
    }
    next()
}

module.exports = isValidId