const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const index = require('./routes/index');

dotenv.config();

const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
}));

app.use(process.env.ROUTE_PATH || '/', index);

const port = process.env.PORT || '3000';

app.listen(port, function(error) {
  if (error) throw error;
  console.log('Server running on port ' + port);
});

module.exports = app;
