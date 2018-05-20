'use strict';


/**
 * Register for a new user account in order to receive an email with a new user authentication token
 *
 * body CmsCreateUserRequest 
 * returns protobufEmpty
 **/
exports.registerNewUser = function(body) {
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
 * Verify ownership of your email address in order to finish creating your new user account
 *
 * body CmsVerifyNewUserRequest 
 * returns cmsUserRequest
 **/
exports.verifyNewUser = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : "id"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

