const mongoose = require('mongoose');
const mentorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const user1 = new mongoose.model('mentor', mentorSchema);

module.exports = mongoose.model('mentor', mentorSchema);    

const mentor = new mongoose.model('mentor', mentorSchema);
module.exports = mentor;
