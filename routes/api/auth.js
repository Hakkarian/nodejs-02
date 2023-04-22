const express = require('express');
const middleware = require('../../middlewares');
const ctrl = require('../../controllers');
const { upload } = middleware;

const router = express.Router();

router.post('/register', middleware.validateRegSchema, ctrl.register)

router.get('/verify/:verificationToken', ctrl.verifyEmail)

router.post('/verify', middleware.validateEmailSchema, ctrl.repeatVerifyEmail)

router.post('/login', middleware.validateLogSchema, ctrl.login)

router.get('/current', middleware.authenticate, ctrl.getCurrent)

router.post('/logout', middleware.authenticate, ctrl.logout)

router.patch('/:id', middleware.authenticate, middleware.validateSubSchema, ctrl.updateStatusContact)

router.patch('/avatars', middleware.authenticate, upload.single('avatar'), middleware.checkIfExists, ctrl.updateAvatar)

module.exports = router;