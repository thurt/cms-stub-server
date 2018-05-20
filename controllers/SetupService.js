'use strict';

exports.isSetup = function(args, res, next) {
  /**
   * Check if application is setup
   *
   * returns protobufBoolValue
   **/
  var examples = {};
  examples['application/json'] = {
  "value" : true
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.setup = function(args, res, next) {
  /**
   * Setup the application
   *
   * body CmsCreateUserRequest 
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

