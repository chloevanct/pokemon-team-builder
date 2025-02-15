var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
const connectDB = require('./db/connection')
require("dotenv").config();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var membersRouter = require('./routes/members');

// connect MongoDB
connectDB();

var app = express();

const corsOptions = {
    origin: "https://cpsc455-assignment-chloevanct-frontend.onrender.com",
}

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors(corsOptions));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/members', membersRouter);
// use the membersRouter for any requests that start with '/members'

module.exports = app;
// main file in express appplication. it is entry point for the app, responsible for setting up.