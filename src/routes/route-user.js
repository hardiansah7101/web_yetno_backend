const router = require('express').Router();
const { user } = require('../controllers');

router.post('/login', user.postLogin);

module.exports = router;