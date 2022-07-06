const router = require('express').Router();
const { webInfo } = require('../controllers');

router.get('/', webInfo.getWebInfo);

module.exports = router;