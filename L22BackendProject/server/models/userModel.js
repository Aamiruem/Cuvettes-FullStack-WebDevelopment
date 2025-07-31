// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     password: {
//         type: String,
//         required: true
//     }
// });
// const User = new mongoose.model('User', userSchema);

// module.exports = User;





const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true // ✅ Correct placement for timestamps
    }
);

//static singup function
userSchema.statics.signup = async (email, password) => {
    const exist = await User.findOne({ email});

    if (exist) {
        throw Error('Email already in use');
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const user = await User.create({ email, password: hash });
    return user;
};

const User = mongoose.model('User', userSchema);

module.exports = User;
