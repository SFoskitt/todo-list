// server/app.js
const express = require('express');
const morgan = require('morgan');
const path = require('path');
var request = require('request');

// require('dotenv').config();
const dotenv = require('dotenv');
dotenv.config();

const app = express();

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// maybe add CORS headers
app.use(function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();  
});

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.get('/tasks', (req, res) => {
    const user = process.env.CHECK_USER;
    const pass = process.env.CHECK_PASS;
    const list = process.env.CHECK_LIST;
    const url = 'https://' + user + ':' + pass + '@checkvist.com/checklists/'+ list + '/tasks.json';
    console.log('url', url);
    let options = {
      url: url,
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
        'origin': 'http://localhost:9000',
      }
    };

  request.get(options, function(error, response, body){
    if(body){
      res.send(body);
    }
    if(error){ console.error('error', error)};
  });
});

module.exports = app;
