/*
 * @lc app=leetcode id=168 lang=javascript
 *
 * [168] Excel Sheet Column Title
 */

/**
 * tags: #modular-arithmetic
 * {@link 504.base-7.js}
 */

// @lc code=start
/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
  let ans = '';
  while (columnNumber > 0) {
    columnNumber--;
    ans = String.fromCharCode((columnNumber % 26) + 65) + ans;
    columnNumber = parseInt(columnNumber / 26);
  }

  return ans;
};
// @lc code=end


/**
 * - Time complexity: O(log n)
 * - Space complexity: O(1)
 */