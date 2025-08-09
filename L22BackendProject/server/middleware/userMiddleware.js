// const jwt = require('jsonwebtoken');
// const User  = require('../models/userModel');

// const authUser = async (req, res, next) => {
//     const {authorization} = req.headers;
   
//     if (!authorization) {
//         return res.status(401).json({ message: 'Unauthorized' });
//     }

//     const token = authorization.split(' ')[1];
//     try {
//         const { _id } = jwt.verify(token, process.env.JWT_SECRET);
//         req.user = await User.findById({ _id }).select('-id'); // _id;
//         next();
//     } catch (error) {
//         return res.status(401).json({ message: 'Request is not authorized' });
//     }

// };

// module.exports = { authUser };













// const jwt = require('jsonwebtoken');
// const User = require('../models/userModel');

// const authUser = async (req, res, next) => {
//     const { authorization } = req.headers;

//     if (!authorization) {
//         return res.status(401).json({ message: 'Unauthorized' });
//     }

//     const token = authorization.split(' ')[1];

//     try {
//         const { _id } = jwt.verify(token, process.env.JWT_SECRET);

//         // Attach user to request (excluding sensitive fields)
//         req.user = await User.findById(_id).select('-password');

//         next();
//     } catch (error) {
//         return res.status(401).json({ message: 'Request is not authorized' });
//     }
// };

// module.exports = { authUser };









const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const authUser = async (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    const token = authorization.split(' ')[1];

    try {
        const { _id } = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(_id).select('-password');

        if (!req.user) {
            return res.status(401).json({ message: 'User not found' });
        }

        next();
    } catch (error) {
        console.error(error);
        return res.status(401).json({ message: 'Request is not authorized' });
    }
};

module.exports = { authUser };
