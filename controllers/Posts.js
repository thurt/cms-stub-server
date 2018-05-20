'use strict';

var url = require('url');

var Posts = require('./PostsService');

module.exports.createPost = function createPost (req, res, next) {
  Posts.createPost(req.swagger.params, res, next);
};

module.exports.deletePost = function deletePost (req, res, next) {
  Posts.deletePost(req.swagger.params, res, next);
};

module.exports.getPost = function getPost (req, res, next) {
  Posts.getPost(req.swagger.params, res, next);
};

module.exports.getPostBySlug = function getPostBySlug (req, res, next) {
  Posts.getPostBySlug(req.swagger.params, res, next);
};

module.exports.getPostComments = function getPostComments (req, res, next) {
  Posts.getPostComments(req.swagger.params, res, next);
};

module.exports.getPosts = function getPosts (req, res, next) {
  Posts.getPosts(req.swagger.params, res, next);
};

module.exports.getUnpublishedPost = function getUnpublishedPost (req, res, next) {
  Posts.getUnpublishedPost(req.swagger.params, res, next);
};

module.exports.getUnpublishedPostBySlug = function getUnpublishedPostBySlug (req, res, next) {
  Posts.getUnpublishedPostBySlug(req.swagger.params, res, next);
};

module.exports.getUnpublishedPosts = function getUnpublishedPosts (req, res, next) {
  Posts.getUnpublishedPosts(req.swagger.params, res, next);
};

module.exports.updatePost = function updatePost (req, res, next) {
  Posts.updatePost(req.swagger.params, res, next);
};
