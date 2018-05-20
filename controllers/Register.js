'use strict';

var url = require('url');

var Register = require('./RegisterService');

module.exports.registerNewUser = function registerNewUser (req, res, next) {
  Register.registerNewUser(req.swagger.params, res, next);
};

module.exports.verifyNewUser = function verifyNewUser (req, res, next) {
  Register.verifyNewUser(req.swagger.params, res, next);
};
