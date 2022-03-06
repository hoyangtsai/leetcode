/*
 * @lc app=leetcode id=69 lang=javascript
 *
 * [69] Sqrt(x)
 */

/**
 * tags: #math, #binary-search
 * {@link 367.valid-perfect-square.js}
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  if (x < 2) return x;

  let l = 2, r = parseInt(x / 2);
  while(l <= r) {
    let m = parseInt((l + r) / 2);
    let sqrt = m * m;
    if (sqrt > x) {
      r = m - 1;
    } else if (sqrt < x) {
      l = m + 1;
    } else {
      return m;
    }
  }
  // return r = l - 1;
  return l - 1;
};
// @lc code=end

/**
 * Binary search
 * 
 * - Time complexity: O(log N).
 * - Space complexity: O(1).
 */