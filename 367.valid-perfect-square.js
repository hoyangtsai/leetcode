/*
 * @lc app=leetcode id=367 lang=javascript
 *
 * [367] Valid Perfect Square
 */

/**
 * #facebook, #linkedin, #rakuten
 * tags: #math, #binary-search
 * {@link 69.sqrt-x.js}
 * {@link 279.perfect-squares.js}
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  if (num < 2) {
    return true;
  }

  let left = 0, right = num;
  while (left <= right) {
    let mid = parseInt((left + right) / 2);
    if (mid * mid == num) {
      return true;
    }
    if (mid * mid > num) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return false;
};
// @lc code=end

/**
 * Binary search
 * Time complexity: O(log N).
 * Space complexity: O(1).
 */