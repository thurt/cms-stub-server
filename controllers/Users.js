'use strict';

var utils = require('../utils/writer.js');
var Users = require('../service/UsersService');

module.exports.deleteUser = function deleteUser (req, res, next) {
  var id = req.swagger.params['id'].value;
  Users.deleteUser(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getUser = function getUser (req, res, next) {
  var id = req.swagger.params['id'].value;
  Users.getUser(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getUserComments = function getUserComments (req, res, next) {
  var id = req.swagger.params['id'].value;
  Users.getUserComments(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
