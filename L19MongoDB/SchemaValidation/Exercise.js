const express = require('express');

const app = express();

const mongoose = require('mongoose');



mongoose.connect('mongodb://localhost:27017/mydatabase', {

    useNewUrlParser: true,

    useUnifiedTopology: true,

});



const productSchema = new mongoose.Schema({

    name: {

        type: String,

        required: true,

        minlength: 5,

    },

    price: {

        type: Number,

        required: true,

        min: 1,

    },

});



const Product = mongoose.model('Product', productSchema);



app.post('/products', (req, res) => {

    const product = new Product(req.body);

    product.save((err) => {

        if (err) {

            res.status(400).send(err);

        } else {

            res.send('Product created');

        }

    });

});



app.use((err, req, res, next) => {

    if (err.name === 'ValidationError') {

        res.status(400).send(err.message);

    } else {

        next(err);

    }

});


