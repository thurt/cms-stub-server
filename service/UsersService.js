'use strict';


/**
 * Delete a user
 *
 * id String 
 * returns protobufEmpty
 **/
exports.deleteUser = function(id) {
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
 * Get a user
 *
 * id String 
 * returns cmsUser
 **/
exports.getUser = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "role" : { },
  "lastActive" : "lastActive",
  "created" : "created",
  "id" : "id",
  "email" : "email"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get all comments by user
 *
 * id String 
 * returns cmsComment
 **/
exports.getUserComments = function(id) {
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

