'use strict';


/**
 * Create a post
 *
 * body CmsCreatePostRequest 
 * returns cmsPostRequest
 **/
exports.createPost = function(body) {
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
 * Delete a post
 *
 * id Long 
 * returns protobufEmpty
 **/
exports.deletePost = function(id) {
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
 * Get a post
 *
 * id Long 
 * returns cmsPost
 **/
exports.getPost = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "created" : "created",
  "id" : 0,
  "lastEdited" : "lastEdited",
  "title" : "title",
  "content" : "content",
  "slug" : "slug"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get a post (by slug)
 *
 * slug String 
 * returns cmsPost
 **/
exports.getPostBySlug = function(slug) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "created" : "created",
  "id" : 0,
  "lastEdited" : "lastEdited",
  "title" : "title",
  "content" : "content",
  "slug" : "slug"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get all comments by post
 *
 * id Long 
 * returns cmsComment
 **/
exports.getPostComments = function(id) {
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
 * Get all posts
 *
 * returns cmsPost
 **/
exports.getPosts = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "created" : "created",
  "id" : 0,
  "lastEdited" : "lastEdited",
  "title" : "title",
  "content" : "content",
  "slug" : "slug"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get an unpublished post
 *
 * id Long 
 * returns cmsUnpublishedPost
 **/
exports.getUnpublishedPost = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "post" : {
    "created" : "created",
    "id" : 0,
    "lastEdited" : "lastEdited",
    "title" : "title",
    "content" : "content",
    "slug" : "slug"
  },
  "published" : true,
  "last_published" : "last_published"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get an unpublished post (by slug)
 *
 * slug String 
 * returns cmsUnpublishedPost
 **/
exports.getUnpublishedPostBySlug = function(slug) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "post" : {
    "created" : "created",
    "id" : 0,
    "lastEdited" : "lastEdited",
    "title" : "title",
    "content" : "content",
    "slug" : "slug"
  },
  "published" : true,
  "last_published" : "last_published"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get all unpublished posts
 *
 * returns cmsUnpublishedPost
 **/
exports.getUnpublishedPosts = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "post" : {
    "created" : "created",
    "id" : 0,
    "lastEdited" : "lastEdited",
    "title" : "title",
    "content" : "content",
    "slug" : "slug"
  },
  "published" : true,
  "last_published" : "last_published"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update a post
 *
 * id Long 
 * body CmsUpdatePostRequest 
 * returns protobufEmpty
 **/
exports.updatePost = function(id,body) {
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

