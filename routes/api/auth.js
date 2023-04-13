const express = require('express');
const { validateRegSchema, validateLogSchema, validateSubSchema} = require('../../middlewares/validateData');
const { authenticate } = require('../../middlewares');
const { register, login, getCurrent, logout, updateSubscription } = require('../../controllers');

const router = express.Router();

router.post('/register', validateRegSchema, register)

router.post('/login', validateLogSchema, login)

router.get('/current', authenticate, getCurrent)

router.post('/logout', authenticate, logout)

router.patch('/users/:id', authenticate, validateSubSchema, updateSubscription)

module.exports = router;