'use strict';


/**
 * Create a comment
 *
 * body CmsCreateCommentRequest 
 * returns cmsCommentRequest
 **/
exports.createComment = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete a comment
 *
 * id Long 
 * returns protobufEmpty
 **/
exports.deleteComment = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = { };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get a comment
 *
 * id Long 
 * returns cmsComment
 **/
exports.getComment = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "created" : "created",
  "id" : 0,
  "lastEdited" : "lastEdited",
  "postId" : "postId",
  "userId" : "userId",
  "content" : "content"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get all comments
 *
 * returns cmsComment
 **/
exports.getComments = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "created" : "created",
  "id" : 0,
  "lastEdited" : "lastEdited",
  "postId" : "postId",
  "userId" : "userId",
  "content" : "content"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update a comment
 *
 * id Long 
 * body CmsUpdateCommentRequest 
 * returns protobufEmpty
 **/
exports.updateComment = function(id,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = { };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

