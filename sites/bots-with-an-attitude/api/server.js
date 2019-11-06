var express = require("express");
var bodyParser = require("body-parser");

module.exports = function(controller) {
  var webserver = express();
  webserver.use(bodyParser.json());
  webserver.use(bodyParser.urlencoded({ extended: true }));
  webserver.listen(process.env.PORT || 3000, null, function() {
    console.log("Express webserver configured and listening!");
  });
  controller.webserver = webserver;
  return webserver;
};
