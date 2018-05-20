'use strict';

exports.authUser = function(args, res, next) {
  /**
   * Authenticate as an existing user to get an access token
   *
   * body CmsAuthUserRequest 
   * returns cmsAccessToken
   **/
  var examples = {};
  examples['application/json'] = {
  "expiresIn" : 0,
  "accessToken" : "aeiou",
  "tokenType" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.logout = function(args, res, next) {
  /**
   * Logout deactivates the provided access token
   *
   * body CmsAccessToken 
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

