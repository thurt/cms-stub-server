'use strict';

var utils = require('../utils/writer.js');
var Setup = require('../service/SetupService');

module.exports.isSetup = function isSetup (req, res, next) {
  Setup.isSetup()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.setup = function setup (req, res, next) {
  var body = req.swagger.params['body'].value;
  Setup.setup(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
