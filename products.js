const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Product = require('./models/product');


router.post('/', (req, res) => {
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price
    });
    product.save().then(result => {
        console.log(result)
    }).catch(err => console.log(err));
    res.status(201).json({
        message: 'Handling POST request of /products',
        createdProduct: product
    });
});

router.get('/', (req, res) => {
    res.status(200).json({
        message: 'Handling GET request of /products'
    });
});

router.get('/:productId', (req, res) => {
    const id = req.params.productId;
    if (id === 'special') {
        res.status(200).json({
            message: 'You accessed special ID',
            id: id
        });
    } else {
        res.status(200).json({
            message: 'You passed an ID'
        })
    }
});

router.patch('/:productId', (req, res) => {
    res.status(200).json({
        message: 'Updated Product'
    })
});

router.delete('/:productId', (req, res) => {
    res.status(200).json({
        message: 'Deleted Product'
    })
});


module.exports = router;