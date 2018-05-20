'use strict';

exports.registerNewUser = function(args, res, next) {
  /**
   * Register for a new user account in order to receive an email with a new user authentication token
   *
   * body CmsCreateUserRequest 
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

exports.verifyNewUser = function(args, res, next) {
  /**
   * Verify ownership of your email address in order to finish creating your new user account
   *
   * body CmsVerifyNewUserRequest 
   * returns cmsUserRequest
   **/
  var examples = {};
  examples['application/json'] = {
  "id" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

