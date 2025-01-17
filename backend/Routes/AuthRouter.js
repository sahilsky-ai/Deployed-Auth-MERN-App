const { signup, login } = require('../Controllers/AuthController');
const { signupValidation, loginValidation } = require('../Middleware/AuthMiddleware');

const router = require('express').Router();

router.post('/login', loginValidation, login );
router.post('/signup',signupValidation, signup);

module.exports = router;