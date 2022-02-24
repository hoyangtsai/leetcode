/*
 * @lc app=leetcode id=1055 lang=javascript
 *
 * [1055] Shortest Way to Form String
 */

/**
 * com: #google
 * tags: #two-pointers, #greedy, #subsequence
 */

// @lc code=start
/**
 * @param {string} source
 * @param {string} target
 * @return {number}
 */
var shortestWay = function(source, target) {
  let t = 0;
  let ans = 0;
  while (t < target.length) {
    let pt = t;

    for (let s = 0; s < source.length; s++) {
      if (t < target.length && source.charAt(s) == target.charAt(t)) {
        t ++;
      }
    }

    if (t == pt) {
      return -1;
    }

    ans++;
  }

  return ans;
};
// @lc code=end

