'use strict';


/**
 * Authenticate as an existing user to get an access token
 *
 * body CmsAuthUserRequest 
 * returns cmsAccessToken
 **/
exports.authUser = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "expiresIn" : 0,
  "accessToken" : "accessToken",
  "tokenType" : "tokenType"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Logout deactivates the provided access token
 *
 * body CmsAccessToken 
 * returns protobufEmpty
 **/
exports.logout = function(body) {
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

