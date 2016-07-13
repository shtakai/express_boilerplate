
const mongoose = require('mongoose');


//declare model and controller
const Quote = mongoose.model('Quote');
let quotes = require('../controllers/quotes.js');

module.exports = function(app){

  // render -> client/views/index.ejs
  app.get('/', function(req, res){
    res.render('index');
  })

  app.post('/quotes', function(req, res){
    quotes.create(req, res);
  })



}
