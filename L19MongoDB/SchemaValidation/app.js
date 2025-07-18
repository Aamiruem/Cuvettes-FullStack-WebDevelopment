const mongoose = require('mongoose');
require('dotenv').config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/library', {
    serverSelectionTimeoutMS: 5000
})
    .then(() => console.log('✅ Connected to MongoDB'))
    .catch(err => console.error('❌ Connection error:', err.message));

// Product Schema with validations
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Product name is required'],
        trim: true,
        minlength: [3, 'Name must be at least 3 characters'],
        maxlength: [50, 'Name cannot exceed 50 characters'],
        validate: {
            validator: function (v) {
                return /^[a-zA-Z0-9 ]+$/.test(v);
            },
            message: 'Name can only contain alphanumeric characters and spaces'
        }
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
        min: [0.01, 'Price must be at least 0.01'],
        max: [10000, 'Price cannot exceed 10,000']
    },
    category: {
        type: String,
        required: true,
        enum: {
            values: ['Electronics', 'Clothing', 'Food', 'Home'],
            message: '{VALUE} is not a valid category'
        }
    },
    inStock: {
        type: Boolean,
        default: true
    },
    stockQuantity: {
        type: Number,
        min: [0, 'Stock cannot be negative'],
        validate: {
            validator: function (v) {
                return Number.isInteger(v);
            },
            message: 'Stock quantity must be an integer'
        }
    },
    createdAt: {
        type: Date,
        default: Date.now,
        immutable: true
    }
}, {
    timestamps: true
});

// Custom validation: If inStock is true, stockQuantity must be > 0
productSchema.pre('validate', function (next) {
    if (this.inStock && (!this.stockQuantity || this.stockQuantity <= 0)) {
        this.invalidate('stockQuantity', 'In-stock products must have positive quantity', this.stockQuantity);
    }
    next();
});

// Create Product model
const Product = mongoose.model('Product', productSchema);
async function testProductValidations() {
    // Valid product
    const validProduct = new Product({
        name: 'Wireless Keyboard',
        price: 29.99,
        category: 'Electronics',
        stockQuantity: 50
    });

    // Invalid products (will trigger different validation errors)
    const invalidProducts = [
        // Missing required fields
        new Product({}),

        // Invalid name
        new Product({
            name: 'A', // too short
            price: 10,
            category: 'Electronics'
        }),

        // Invalid price
        new Product({
            name: 'Smartphone',
            price: -100, // negative price
            category: 'Electronics'
        }),

        // Invalid category
        new Product({
            name: 'T-Shirt',
            price: 19.99,
            category: 'InvalidCategory' // not in enum
        }),

        // Stock validation
        new Product({
            name: 'Laptop',
            price: 999.99,
            category: 'Electronics',
            inStock: true,
            stockQuantity: 0 // invalid with inStock=true
        })
    ];

    try {
        // Test valid product
        const savedProduct = await validProduct.save();
        console.log('✅ Valid product saved:', savedProduct);

        // Test invalid products
        for (const product of invalidProducts) {
            try {
                await product.save();
            } catch (err) {
                handleValidationError(err);
            }
        }
    } catch (err) {
        handleValidationError(err);
    } finally {
        mongoose.disconnect();
    }
}

// Error handling function
function handleValidationError(err) {
    if (err.name === 'ValidationError') {
        console.error('🔴 Validation failed for:');
        console.error(JSON.stringify(err.errors, null, 2));

        // Detailed error messages
        for (const field in err.errors) {
            const error = err.errors[field];
            console.error(`- ${field}: ${error.message}`);
        }
    } else {
        console.error('❌ Unexpected error:', err.message);
    }
}

// Run the tests
testProductValidations();


async function addDatabaseValidation() {
    const db = mongoose.connection.db;

    try {
        await db.command({
            collMod: 'products',
            validator: {
                $jsonSchema: {
                    bsonType: 'object',
                    required: ['name', 'price', 'category'],
                    properties: {
                        name: {
                            bsonType: 'string',
                            minLength: 3,
                            maxLength: 50,
                            pattern: '^[a-zA-Z0-9 ]+$'
                        },
                        price: {
                            bsonType: 'number',
                            minimum: 0.01,
                            maximum: 10000
                        },
                        category: {
                            enum: ['Electronics', 'Clothing', 'Food', 'Home'],
                            bsonType: 'string'
                        },
                        stockQuantity: {
                            bsonType: 'int',
                            minimum: 0
                        }
                    }
                }
            },
            validationLevel: 'strict'
        });
        console.log('✅ Database validation rules updated');
    } catch (err) {
        console.error('❌ Error updating validation rules:', err.message);
    }
}

// Call after connection is established
mongoose.connection.once('open', addDatabaseValidation);
