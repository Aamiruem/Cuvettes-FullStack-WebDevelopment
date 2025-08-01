// const jwt = require('jsonwebtoken');
// const { User } = require('../models/user');

// const createToken = (_id) => {
//     jwt.sign({ _id }, process.env.JWT_SECRET,{ expiresIn: '3d'
//     });
// };

// module.exports = createToken;



const jwt = require('jsonwebtoken'); // This line fails if jsonwebtoken isn't installed


const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn: '3d' });
};

module.exports = createToken;
