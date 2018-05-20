'use strict';

var url = require('url');

var Setup = require('./SetupService');

module.exports.isSetup = function isSetup (req, res, next) {
  Setup.isSetup(req.swagger.params, res, next);
};

module.exports.setup = function setup (req, res, next) {
  Setup.setup(req.swagger.params, res, next);
};
