'use strict';

var utils = require('../utils/writer.js');
var Register = require('../service/RegisterService');

module.exports.registerNewUser = function registerNewUser (req, res, next) {
  var body = req.swagger.params['body'].value;
  Register.registerNewUser(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.verifyNewUser = function verifyNewUser (req, res, next) {
  var body = req.swagger.params['body'].value;
  Register.verifyNewUser(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
