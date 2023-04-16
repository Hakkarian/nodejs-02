const { ErrorHandler } = require("../helpers")

module.exports = {
    checkIfExists: (req, res, next) => {
        !req.file && next(ErrorHandler(400, "missing required avatar field"))
        next()
    }
}