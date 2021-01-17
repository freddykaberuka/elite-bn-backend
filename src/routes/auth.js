import { Router } from 'express';

const User = require('../controllers/User');

const router = Router();

router.post('/signup', User.signUp);

module.exports = router;
