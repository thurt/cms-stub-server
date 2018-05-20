'use strict';

exports.deleteUser = function(args, res, next) {
  /**
   * Delete a user
   *
   * id String 
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

exports.getUser = function(args, res, next) {
  /**
   * Get a user
   *
   * id String 
   * returns cmsUser
   **/
  var examples = {};
  examples['application/json'] = {
  "role" : { },
  "lastActive" : "aeiou",
  "created" : "aeiou",
  "id" : "aeiou",
  "email" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.getUserComments = function(args, res, next) {
  /**
   * Get all comments by user
   *
   * id String 
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

