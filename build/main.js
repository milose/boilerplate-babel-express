"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("dotenv/config");

var _express = _interopRequireDefault(require("express"));

// eslint-disable-next-line no-console
console.log('We are running on', process.env.APP_ENV, 'environment.');
var app = (0, _express["default"])();
app.get('/', function (req, res) {
  res.send('Woo hoo!');
}); // eslint-disable-next-line no-console

app.listen(3000, function () {
  return console.log('Example app listening on port 3000!');
});