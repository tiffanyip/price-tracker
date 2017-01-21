var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');

var app = express();

app.use(morgan('dev'));

app.use(express.static('./client'));
app.use(bodyParser.json());
app.use('/clinet', express.static('./node_modules'));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server listening on: ${PORT}`);
})


module.exports = app;
