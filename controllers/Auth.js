'use strict';

var url = require('url');

var Auth = require('./AuthService');

module.exports.authUser = function authUser (req, res, next) {
  Auth.authUser(req.swagger.params, res, next);
};

module.exports.logout = function logout (req, res, next) {
  Auth.logout(req.swagger.params, res, next);
};
