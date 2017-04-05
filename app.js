// server/app.js
const express = require('express');
const morgan = require('morgan');
const path = require('path');
var request = require('request');

const app = express();

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Serve static assets
app.use(express.static(path.resolve(__dirname + '/client/build')));

// Always return the main index.html, so react-router render the route in the client
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
// });

app.get('/tasks', (req, res) => {
    var options = {
      url: 'https://checkvist.com/checklists/603780/tasks.json',
      headers: {
        'accept': 'application/json',
        'authorization': 'Basic ZGV2ZWxvcGRoYXJtYUBnbWFpbC5jb206aG90dHViMjIy',
        'content-type': 'application/json',
        'origin': 'http://localhost:9000',
      }
    }

  request.get(options, function(error, response, body){
    if(body){
      res.send(body);
    }
    if(error){ console.log('error', error)}
  });
});

module.exports = app;
