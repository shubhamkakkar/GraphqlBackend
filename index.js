const express = require("express");
const expressGraphQL = require('express-graphql');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config()

const schema = require("./schema")


const MONGO_URI = process.env.MONGO_URI
const app = express();
const port = 3001

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI, { useNewUrlParser: true });



app.use('/graphql', expressGraphQL({
    schema,
    graphiql: true
  }));

  

function appListenpassFunction(){
    mongoose.connection
    .once('open', () => {
      // console.log('Connected to MongoLab instance. PORT=' + port)
      // mongoose.connection.db.listCollections().toArray(function (err, names) {
      //   console.log({names});
      // });
      
    })
    .on('error', error => console.log('Error connecting to MongoLab:', error));

}



app.listen(port, appListenpassFunction)
