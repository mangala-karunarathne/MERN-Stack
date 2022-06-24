
const express = require("express");
const app = express();
const mongoose = require('mongoose');

mongoose.connect()

app.listen(3001, () => {
    console.log("SERVER RUNS PERFECTLY");
});


/*
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('bodyParser');
const cors = require('cors');
const dotenv = require('dotenv');

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false,
});

*/