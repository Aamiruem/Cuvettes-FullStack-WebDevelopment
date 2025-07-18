const mongoose = require("mongoose");


mongoose.connect('mongodb://127.0.0.1:27017/test')
.then(() => {
    console.log("Connected to MongoDB")
})
.catch((err) => {
    console.log(err)
})

const getDocument = async () => {
    try {
        const data = await Mentor.find({ state: "Bihar" }).select({id: 1, name: 1, email: 1 });
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}
