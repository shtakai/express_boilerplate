require('dotenv').config();
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const mongo_url = process.env.MONGO_URL;


mongoose.connect(mongo_url);

// create a variable that points to the path
//  where all of the model live
let models_path = path.join(__dirname, './../models');

// read all of the files in the models_path and
//  require (run) each of the javascript file
fs.readdirSync(models_path).forEach(function(file){
  if(file.indexOf('.js') >= 0) {
    // require the file
    //  (this runs the model file which register the schema)
    require(models_path + '/' + file);
  }
});
