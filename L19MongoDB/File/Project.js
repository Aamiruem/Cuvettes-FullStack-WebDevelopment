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















const mongoose = require('mongoose');

// Database connection
async function connectToDatabase() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/productsDB');
        console.log('Connected to MongoDB successfully');
    } catch (err) {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    }
}

// Product Schema and Model
const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    category: String,
    inStock: { type: Boolean, default: true }
});

const Product = mongoose.model('Product', productSchema);

// CRUD Operations
async function performCRUDOperations() {
    try {
        await connectToDatabase();

        // CREATE
        const newProduct = new Product({
            name: 'Wireless Mouse',
            price: 29.99,
            category: 'Accessories'
        });
        const savedProduct = await newProduct.save();
        console.log('Created product:', savedProduct);

        // READ
        const products = await Product.find();
        console.log('All products:', products);

        // UPDATE
        const updatedProduct = await Product.findByIdAndUpdate(
            savedProduct._id,
            { price: 24.99 },
            { new: true }
        );
        console.log('Updated product:', updatedProduct);

        // // DELETE
        // const deletedProduct = await Product.findByIdAndDelete(savedProduct._id);
        // console.log('Deleted product:', deletedProduct);

    } catch (err) {
        console.error('Error in CRUD operations:', err);
    } finally {
        mongoose.connection.close();
    }
}

performCRUDOperations();
