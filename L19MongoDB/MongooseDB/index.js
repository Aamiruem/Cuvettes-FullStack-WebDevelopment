const mongoose = require("mongoose"); 
mongoose.connect("mongodb://localhost:27017/careerpedia/mentor")


.then(() => {
    console.log("Connected to MongoDB")
})
.catch((err) => {
    console.log(err)
})

// const connectDB = async () => {
//     try {
//         const conn = await mongoose.connect(process.env.MONGO_URI);
//         console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
//     } catch (error) {
//         console.log(`Error: ${error.message}`.red.bold);
//         process.exit(1);
//     }
// };
