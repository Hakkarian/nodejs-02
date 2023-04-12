const handleMongooseError = (error, res, next) => {
    error.status = 400;
    next();
}

module.exports = handleMongooseError
