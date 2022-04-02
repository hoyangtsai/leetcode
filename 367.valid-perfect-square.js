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

  let left = 2, right = parseInt(num / 2);
  while (left <= right) {
    let mid = parseInt((left + right) / 2);
    let sqrt = mid * mid;
    if (sqrt == num) {
      return true;
    } else if (sqrt > num) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return false;
};
// @lc code=end


/**
 * - Time complexity: O(log N).
 * - Space complexity: O(1).
 */