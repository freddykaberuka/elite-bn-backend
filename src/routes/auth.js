import { Router } from 'express';

const User = require('../controllers/User');

const router = Router();

router.post('/signup', User.signUp);
router.post('/signup/verify/:token', User.confirmEmail);

module.exports = router;
