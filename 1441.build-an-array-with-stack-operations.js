/*
 * @lc app=leetcode id=1441 lang=javascript
 *
 * [1441] Build an Array With Stack Operations
 */

/**
 * tags: #stack
 */

// @lc code=start
/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
  let res = [];
  let j = 0;
  for (let i = 1; i <= n && j < target.length; i++) {
    res.push("Push");
    if (target[j] == i) {
      j++;
    } else {
      res.push("Pop");
    }
  }
  return res;
};
// @lc code=end

