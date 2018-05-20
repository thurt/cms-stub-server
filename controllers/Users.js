'use strict';

var url = require('url');

var Users = require('./UsersService');

module.exports.deleteUser = function deleteUser (req, res, next) {
  Users.deleteUser(req.swagger.params, res, next);
};

module.exports.getUser = function getUser (req, res, next) {
  Users.getUser(req.swagger.params, res, next);
};

module.exports.getUserComments = function getUserComments (req, res, next) {
  Users.getUserComments(req.swagger.params, res, next);
};
