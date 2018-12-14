const express = require('express');
const router = express.Router();
require('./route/index')(router);
require('./route/login')(router);
require('./route/student')(router);
module.exports = router;