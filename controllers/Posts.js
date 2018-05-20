'use strict';

var utils = require('../utils/writer.js');
var Posts = require('../service/PostsService');

module.exports.createPost = function createPost (req, res, next) {
  var body = req.swagger.params['body'].value;
  Posts.createPost(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deletePost = function deletePost (req, res, next) {
  var id = req.swagger.params['id'].value;
  Posts.deletePost(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getPost = function getPost (req, res, next) {
  var id = req.swagger.params['id'].value;
  Posts.getPost(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getPostBySlug = function getPostBySlug (req, res, next) {
  var slug = req.swagger.params['slug'].value;
  Posts.getPostBySlug(slug)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getPostComments = function getPostComments (req, res, next) {
  var id = req.swagger.params['id'].value;
  Posts.getPostComments(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getPosts = function getPosts (req, res, next) {
  Posts.getPosts()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getUnpublishedPost = function getUnpublishedPost (req, res, next) {
  var id = req.swagger.params['id'].value;
  Posts.getUnpublishedPost(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getUnpublishedPostBySlug = function getUnpublishedPostBySlug (req, res, next) {
  var slug = req.swagger.params['slug'].value;
  Posts.getUnpublishedPostBySlug(slug)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getUnpublishedPosts = function getUnpublishedPosts (req, res, next) {
  Posts.getUnpublishedPosts()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updatePost = function updatePost (req, res, next) {
  var id = req.swagger.params['id'].value;
  var body = req.swagger.params['body'].value;
  Posts.updatePost(id,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
