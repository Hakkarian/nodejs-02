const {User} = require('../models/user')
const { ctrlWrapper } = require('../helpers/controllerWrapper')

console.log('here')
const register = async (req, res, next) => {

    const result = await User.create(req.body)

    res.status(201).json(result)
}

module.exports = {
    register: ctrlWrapper(register),

}
