const express = require('express');
const path = require('path');
const logger = require('morgan');
const app = express();

//middleware
if (process.env.NODE_ENV !== 'test') app.use(logger('dev'));

app.use(express.static(path.join(__dirname, 'dist')));

//start server
app.listen(process.env.PORT || 8080, () => console.log('listening...'));

module.exports = app;