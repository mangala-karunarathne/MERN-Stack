const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); 

const URL = process.env.MONGODB_URL;
mongoose.connect(URL, { 
    useCreateIndex: true, 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    //useFindAndModify: false, 

/*}, err => {
    if(err) throw err;
    console.log('Connected to MongoDB!!!')*/
    });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
}); 

/* var mongoose = require('mongoose');

module.exports = mongoose.model('User', {

   email : String ,
   pwd : String

});*/
