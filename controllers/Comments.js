'use strict';

var url = require('url');

var Comments = require('./CommentsService');

module.exports.createComment = function createComment (req, res, next) {
  Comments.createComment(req.swagger.params, res, next);
};

module.exports.deleteComment = function deleteComment (req, res, next) {
  Comments.deleteComment(req.swagger.params, res, next);
};

module.exports.getComment = function getComment (req, res, next) {
  Comments.getComment(req.swagger.params, res, next);
};

module.exports.getComments = function getComments (req, res, next) {
  Comments.getComments(req.swagger.params, res, next);
};

module.exports.updateComment = function updateComment (req, res, next) {
  Comments.updateComment(req.swagger.params, res, next);
};
