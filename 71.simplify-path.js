/*
 * @lc app=leetcode id=71 lang=javascript
 *
 * [71] Simplify Path
 */

/**
 * tags: #stack
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  let stack = [];
  path = path.split('/');

  for (let i = 0; i < path.length; i++) {
      if (path[i] == '.' || path[i] == '') continue;
      if (path[i] == '..') stack.pop();
      else stack.push(path[i]);
  }
  
  return '/' + stack.join('/');
};
// @lc code=end

