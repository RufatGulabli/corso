const express = require('express');
const winston = require('winston');
const config = require('./startup/config');
const app = express();

require('./startup/loggin')();
require('./startup/routes')(app);
require('./startup/DBConnection')();
config.configuration();

app.listen(config.port, () => winston.info(`Server is running on port ${config.port}...`));
