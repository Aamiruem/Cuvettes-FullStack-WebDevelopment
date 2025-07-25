require('dotenv').config();
require("./Config/db").connect()
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');

// Importing the model user
const User = require('./Models/User');
const auth = require('./middleware/auth');

const { SECRET, PORT } = process.env;

const app = express();
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

