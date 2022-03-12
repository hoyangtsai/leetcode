/*
 * @lc app=leetcode id=1304 lang=javascript
 *
 * [1304] Find N Unique Integers Sum up to Zero
 */

/**
 * tags: #math, #zero
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
  let A = [];
  for (let i = 0; i < n; ++i)
    A[i] = i * 2 - n + 1;
  return A;
};
// @lc code=end

