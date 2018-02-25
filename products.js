const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    res.status(201).json({
        message: 'Handling POST request of /products'
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