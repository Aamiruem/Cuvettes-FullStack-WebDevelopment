// CRUD Operations with MongoDB Compass using Mongoose
// Prerequisites
// MongoDB installed and running

// MongoDB Compass installed

// Node.js environment set up

// Mongoose installed(npm install mongoose)

// 1. Setting up the Connection
// First, let's establish a connection to MongoDB and define our Product model:

// javascript
// const mongoose = require('mongoose');

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/productsDB', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
//     .then(() => console.log('Connected to MongoDB'))
//     .catch(err => console.error('Connection error:', err));

// // Define Product Schema
// const productSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     price: {
//         type: Number,
//         required: true
//     },
//     category: String,
//     inStock: {
//         type: Boolean,
//         default: true
//     }
// });

// // Create Product Model
// const Product = mongoose.model('Product', productSchema);
// 2. Create Operation
// javascript
// // Create a new product
// async function createProduct() {
//     const newProduct = new Product({
//         name: 'Laptop',
//         price: 999.99,
//         category: 'Electronics',
//         inStock: true
//     });

//     try {
//         const savedProduct = await newProduct.save();
//         console.log('Product created:', savedProduct);
//     } catch (err) {
//         console.error('Error creating product:', err);
//     }
// }

// createProduct();
// 3. Read Operation
// javascript
// // Retrieve all products
// async function getAllProducts() {
//     try {
//         const products = await Product.find();
//         console.log('All products:', products);
//         return products;
//     } catch (err) {
//         console.error('Error retrieving products:', err);
//     }
// }

// getAllProducts();

// // Retrieve a specific product
// async function getProductByName(name) {
//     try {
//         const product = await Product.findOne({ name });
//         console.log('Found product:', product);
//         return product;
//     } catch (err) {
//         console.error('Error finding product:', err);
//     }
// }

// getProductByName('Laptop');
// 4. Update Operation
// javascript
// // Update a product
// async function updateProduct(productId, updateData) {
//     try {
//         const updatedProduct = await Product.findByIdAndUpdate(
//             productId,
//             updateData,
//             { new: true } // Return the updated document
//         );
//         console.log('Updated product:', updatedProduct);
//         return updatedProduct;
//     } catch (err) {
//         console.error('Error updating product:', err);
//     }
// }

// // Example usage (replace with actual ID from your database)
// // updateProduct('60a1b2c3d4e5f67890a1b2c3', { price: 899.99 });
// 5. Delete Operation
// javascript
// // Delete a product
// async function deleteProduct(productId) {
//     try {
//         const deletedProduct = await Product.findByIdAndDelete(productId);
//         console.log('Deleted product:', deletedProduct);
//         return deletedProduct;
//     } catch (err) {
//         console.error('Error deleting product:', err);
//     }
// }

// // Example usage (replace with actual ID from your database)
// // deleteProduct('60a1b2c3d4e5f67890a1b2c3');
// Viewing Results in MongoDB Compass
// Open MongoDB Compass

// Connect to your local MongoDB instance(mongodb://localhost:27017)

//     Navigate to the productsDB database

// Select the products collection

// You can now:

//     View all documents(Read)

// Add new documents manually(Create)

// Edit existing documents(Update)

// Delete documents(Delete)

// Complete Example
// Here's a complete script that performs all CRUD operations sequentially:

// javascript
// const mongoose = require('mongoose');

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/productsDB', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
//     .then(() => console.log('Connected to MongoDB'))
//     .catch(err => console.error('Connection error:', err));

// // Define Product Schema
// const productSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     price: {
//         type: Number,
//         required: true
//     },
//     category: String,
//     inStock: {
//         type: Boolean,
//         default: true
//     }
// });

// // Create Product Model
// const Product = mongoose.model('Product', productSchema);

// // CRUD Operations
// async function performCRUDOperations() {
//     try {
//         // CREATE
//         const newProduct = new Product({
//             name: 'Smartphone',
//             price: 699.99,
//             category: 'Electronics'
//         });
//         const savedProduct = await newProduct.save();
//         console.log('Created product:', savedProduct);

//         // READ
//         const products = await Product.find();
//         console.log('All products:', products);

//         // UPDATE
//         const updatedProduct = await Product.findByIdAndUpdate(
//             savedProduct._id,
//             { price: 649.99 },
//             { new: true }
//         );
//         console.log('Updated product:', updatedProduct);

//         // DELETE
//         const deletedProduct = await Product.findByIdAndDelete(savedProduct._id);
//         console.log('Deleted product:', deletedProduct);

//         // Verify deletion
//         const remainingProducts = await Product.find();
//         console.log('Remaining products:', remainingProducts);
//     } catch (err) {
//         console.error('Error in CRUD operations:', err);
//     } finally {
//         mongoose.connection.close();
//     }
// }

// performCRUDOperations();
// This script demonstrates a complete CRUD cycle that you can observe in MongoDB Compass after each operation.












const express = require('express');

const app = express();

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mydatabase', {

    useNewUrlParser: true,

    useUnifiedTopology: true,

});



const Product = mongoose.model('Product', {
    name: String,
    price: Number,

});



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



app.get('/products', (req, res) => {

    Product.find().then((products) => {

        res.send(products);

    });

});



app.put('/products/:id', (req, res) => {

    Product.findByIdAndUpdate(req.params.id, req.body, (err) => {

        if (err) {

            res.status(400).send(err);

        } else {

            res.send('Product updated');

        }

    });

});



app.delete('/products/:id', (req, res) => {

    Product.findByIdAndRemove(req.params.id, (err) => {

        if (err) {

            res.status(400).send(err);

        } else {

            res.send('Product deleted');

        }

    });

});
