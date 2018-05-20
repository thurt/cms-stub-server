'use strict';

exports.createComment = function(args, res, next) {
  /**
   * Create a comment
   *
   * body CmsCreateCommentRequest 
   * returns cmsCommentRequest
   **/
  var examples = {};
  examples['application/json'] = {
  "id" : 0
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.deleteComment = function(args, res, next) {
  /**
   * Delete a comment
   *
   * id Long 
   * returns protobufEmpty
   **/
  var examples = {};
  examples['application/json'] = { };
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.getComment = function(args, res, next) {
  /**
   * Get a comment
   *
   * id Long 
   * returns cmsComment
   **/
  var examples = {};
  examples['application/json'] = {
  "created" : "aeiou",
  "id" : 0,
  "lastEdited" : "aeiou",
  "postId" : "aeiou",
  "userId" : "aeiou",
  "content" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.getComments = function(args, res, next) {
  /**
   * Get all comments
   *
   * returns cmsComment
   **/
  var examples = {};
  examples['application/json'] = {
  "created" : "aeiou",
  "id" : 0,
  "lastEdited" : "aeiou",
  "postId" : "aeiou",
  "userId" : "aeiou",
  "content" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.updateComment = function(args, res, next) {
  /**
   * Update a comment
   *
   * id Long 
   * body CmsUpdateCommentRequest 
   * returns protobufEmpty
   **/
  var examples = {};
  examples['application/json'] = { };
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

