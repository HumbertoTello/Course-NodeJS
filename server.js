const express = require('express'); // import of express
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Starting the app
const app = express(); // express execution

// Starting the DB
// Passing the URL connection with MongoDB
mongoose.connect(
  'mongodb://localhost:27017/nodeapi', 
  { useNewUrlParser: true,
    useUnifiedTopology: true });

requireDir('./src/models');

// Rotas
app.use('/api', require('./src/routes')); // receive all types of requisitions

app.listen(3001); // app will listen the 3001 port, so you can access it on your browser: "localhost:3001"



