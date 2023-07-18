const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const queries = require('./queries');


const app = express();

app.use(cors({
  origin: '*',
}));

const routePath = process.env.ROUTE_PATH || '/';

app.get(`${routePath}/entries`, queries.getAllEntries);
app.get(`${routePath}/entries/:id`, queries.getEntry);

const port = process.env.PORT || '3000';

app.listen(port, function(error) {
  if (error) throw error;
  console.log('Server running on port ' + port);
});

module.exports = app;
