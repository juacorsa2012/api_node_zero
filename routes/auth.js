const express = require('express');
const { registro, login, getMe } = require('../controllers/auth');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.post('/registro', registro);
router.post('/login', login);
router.get('/me', protect, getMe);

module.exports = router;
