const mongoose = require("mongoose");


mongoose.connect('mongodb://127.0.0.1:27017/test')
.then(() => {
    console.log("Connected to MongoDB")
})
.catch((err) => {
    console.log(err)
})
//Delete a document
const getDocument = async () => {
    try {
        const data = await Mentor.find({ state: "Bihar" }).select({id: 1, name: 1, email: 1 });
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}



//Delete
const deleteDocument = async () => {
    await User.deleteOne({ _id: id});
}

deleteDocument("5d1a5a5a5a5a5a5a5a5a5a5a");
