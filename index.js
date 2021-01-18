// I usesd express to make the routes
const express = require('express');
// cors was necessary for this app to work. It's for security.
var cors = require('cors');
// calling express
const app = express();
// calling cors
app.use(cors());

// importing data from data.json
const Data = require('./data.json');

// saying on which port I want to run the app
let port = process.env.PORT || 3000;

// This is the server side rendered html 
app.get('/', (req, res) => {
  // it displays simple markup and a link to the API
  res.send(`
    <h2>For API visit <a href="https://still-hamlet-84373.herokuapp.com/food">here</a></h2>
  `);
});
// The route of the API
// "next" is for cors 
app.get('/food', (req, res, next) => {
  res.send(Data);
});

app.listen(port, () => {
  console.log(`listening on port http://localhost:${port}`);
});
