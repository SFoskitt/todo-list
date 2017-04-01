const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

// Setup logger
// app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

// Allow cross origin
app.use(function(req, res, next) {
    // console.log('req', req);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Origin", "localhost:9000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    
    /* these two may be completely made up
    res.header('Access-Control-Allow-Credentials');
    res.header('Access-Control-Allow-Methods': 'GET, POST, OPTIONS');  
    */

    next();
});

// Always return the main index.html, so react-router render the route in the client
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
// });

app.get('/tasks', (req, res) => {
  console.log('its in the right route');
  let url = 'https://checkvist.com/checklists/603780/tasks.json';
  let headers = {
      'accept': 'application/json',
      'authorization': 'Basic ZGV2ZWxvcGRoYXJtYUBnbWFpbC5jb206aG90dHViMjIy',
      // 'content-type': 'application/json',
      'content-type': 'application/json',
      'origin': 'http://localhost:9000',
      'accept': 'application/json',
  }
  // req.header = headers;
}, (err, response, body) => {
  // append data to response ? pass data back to front
  // error testing please
  console.log('body in callback', body);
});

module.exports = app;
