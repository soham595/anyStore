const express = require('express');
const app = express();
const users = require('./src/users');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/users', users);

module.exports = app;