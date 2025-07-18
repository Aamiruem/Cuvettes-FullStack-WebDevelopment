// index.js
const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables

// Database connection function
async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/library', {
            serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
            socketTimeoutMS: 45000, // Close sockets after 45s of inactivity
        });
        console.log('✅ MongoDB connected successfully');

        // Verify connection is ready
        const db = mongoose.connection.db;
        await db.command({ ping: 1 });
        console.log('🗄️ Database connection is active');

        return true;
    } catch (err) {
        console.error('❌ MongoDB connection error:', err.message);
        // Graceful shutdown
        await mongoose.disconnect();
        process.exit(1);
    }
}

// Book Schema with validation
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        trim: true,
        minlength: [2, 'Title must be at least 2 characters'],
        maxlength: [100, 'Title cannot exceed 100 characters']
    },
    author: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Price cannot be negative']
    }
}, { timestamps: true });

// Create Book model
const Book = mongoose.model('Book', bookSchema);

// Main application function
async function main() {
    // 1. Connect to database
    const isConnected = await connectDB();
    if (!isConnected) return;

    try {
        // 2. Create and save a book
        const newBook = new Book({
            title: 'Node.js Design Patterns',
            author: 'kamran Hussain',
            price: 39.99
        });

        const savedBook = await newBook.save();
        console.log('📚 Book saved:', savedBook);

        // 3. Query all books
        const books = await Book.find();
        console.log('📚 All books:', books);

    } catch (err) {
        console.error('🔴 Error:', err.message);
        if (err.name === 'ValidationError') {
            for (const field in err.errors) {
                console.error(`- ${field}: ${err.errors[field].message}`);
            }
        }
    } finally {
        // Close connection
        await mongoose.disconnect();
        console.log('🔌 MongoDB connection closed');
    }
}

// Start the application
main();
