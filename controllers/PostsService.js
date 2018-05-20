'use strict';

exports.createPost = function(args, res, next) {
  /**
   * Create a post
   *
   * body CmsCreatePostRequest 
   * returns cmsPostRequest
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

exports.deletePost = function(args, res, next) {
  /**
   * Delete a post
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

exports.getPost = function(args, res, next) {
  /**
   * Get a post
   *
   * id Long 
   * returns cmsPost
   **/
  var examples = {};
  examples['application/json'] = {
  "created" : "aeiou",
  "id" : 0,
  "lastEdited" : "aeiou",
  "title" : "aeiou",
  "content" : "aeiou",
  "slug" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.getPostBySlug = function(args, res, next) {
  /**
   * Get a post (by slug)
   *
   * slug String 
   * returns cmsPost
   **/
  var examples = {};
  examples['application/json'] = {
  "created" : "aeiou",
  "id" : 0,
  "lastEdited" : "aeiou",
  "title" : "aeiou",
  "content" : "aeiou",
  "slug" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.getPostComments = function(args, res, next) {
  /**
   * Get all comments by post
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

exports.getPosts = function(args, res, next) {
  /**
   * Get all posts
   *
   * returns cmsPost
   **/
  var examples = {};
  examples['application/json'] = {
  "created" : "aeiou",
  "id" : 0,
  "lastEdited" : "aeiou",
  "title" : "aeiou",
  "content" : "aeiou",
  "slug" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.getUnpublishedPost = function(args, res, next) {
  /**
   * Get an unpublished post
   *
   * id Long 
   * returns cmsUnpublishedPost
   **/
  var examples = {};
  examples['application/json'] = {
  "post" : {
    "created" : "aeiou",
    "id" : 0,
    "lastEdited" : "aeiou",
    "title" : "aeiou",
    "content" : "aeiou",
    "slug" : "aeiou"
  },
  "published" : true,
  "last_published" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.getUnpublishedPostBySlug = function(args, res, next) {
  /**
   * Get an unpublished post (by slug)
   *
   * slug String 
   * returns cmsUnpublishedPost
   **/
  var examples = {};
  examples['application/json'] = {
  "post" : {
    "created" : "aeiou",
    "id" : 0,
    "lastEdited" : "aeiou",
    "title" : "aeiou",
    "content" : "aeiou",
    "slug" : "aeiou"
  },
  "published" : true,
  "last_published" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.getUnpublishedPosts = function(args, res, next) {
  /**
   * Get all unpublished posts
   *
   * returns cmsUnpublishedPost
   **/
  var examples = {};
  examples['application/json'] = {
  "post" : {
    "created" : "aeiou",
    "id" : 0,
    "lastEdited" : "aeiou",
    "title" : "aeiou",
    "content" : "aeiou",
    "slug" : "aeiou"
  },
  "published" : true,
  "last_published" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.updatePost = function(args, res, next) {
  /**
   * Update a post
   *
   * id Long 
   * body CmsUpdatePostRequest 
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

