const jwt = require('jsonwebtoken');
const { User } = require('../models/user')


const { ErrorHandler } = require("../helpers");

const { SECRET_KEY } = process.env;


const authenticate = async (req, res, next) => {
    const { authorization = '' } = req.headers;

    const [bearer, token] = authorization.split(' ');
    if (bearer !== "Bearer") {
        next(ErrorHandler(401))
    }
    try {
        const { id } = jwt.verify(token, SECRET_KEY)
        console.log(id)
        const user = await User.findById(id)
        console.log(user)
        if (!user || !user.token || user.token !== token) {
            next(ErrorHandler(401))
        }
        console.log('success')
        req.user = user;
        next()
    } catch (error) {
        console.log('failure')
        next(ErrorHandler(401))
    }
}

module.exports = authenticate;