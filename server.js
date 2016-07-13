require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// static content
app.use(express.static(path.join(__dirname, './client/static')));

// setting up ejs and our viwes folder
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

// require the mongoose configuration file
//  which does the rest for us
require('./server/config/mongoose.js');

// store the function in a variable
// app.get .... -> moved to server/config/routes.js
let routes_setter = require('./server/config/routes.js');

// invoke the function in a valiable
routes_setter(app);

// tell the express app to listen on port 8000
let server = app.listen(port, function(){
  console.log(`server listen on #${port}`);
});

let io = require('socket.io').listen(server);
io.on('connection', sockets =>{
  //console.log('connection')
  //sockets.on('test', data => {
    //console.log('test', data);
  //})
})
