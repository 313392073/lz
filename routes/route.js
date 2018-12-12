const express = require('express');
const router = express.Router();
require('./route/index')(router);
module.exports = router;