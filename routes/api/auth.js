const express = require('express');
const { validateRegSchema} = require('../../middlewares/validateData');
const { register } = require('../../controllers/authControllers');

const router = express.Router();

router.post('/register', validateRegSchema , register)

// router.post("/login", validateLogSchema, (req, res, next) => {

// });

module.exports = router;