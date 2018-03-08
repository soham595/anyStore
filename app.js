const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const users = require('./users');
const products = require('./products');
const morgan = require('morgan');
const orders = require('./orders');

mongoose.connect('mongodb://localhost:27017/anystore');


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(morgan('dev'));
app.use('/uploads', express.static('uploads'));

app.use('/users', users);
app.use('/products', products);
app.use('/orders', orders);

app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);

})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;