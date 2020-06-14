const express = require('express'); // import of express
const mongoose = require('mongoose');

// Starting the app
const app = express(); // express execution

// Starting the DB
// Passing the URL connection with MongoDB
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true, useUnifiedTopology: true });

// First route
// message on screen
// app.get('route', (req, res))
// '/' = root; req = requisition details to the server; res = response to the requisition
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3001); // app will listen the 3001 port, so you can access it on your browser: "localhost:3001"