const jwt = require('jsonwebtoken');
const { User } = require('../models/user');

const createToken = (_id) => {
    jwt.sign({ id }, "mytoken");
};
