/*
 * @lc app=leetcode id=246 lang=javascript
 *
 * [246] Strobogrammatic Number
 */

/**
 * tags: #hash-table, #two-pointers
 * {@link 1056.confusing-number.js}
 */

// @lc code=start
/**
 * @param {string} num
 * @return {boolean}
 */
var isStrobogrammatic = function(num) {
  const rotateDigits = {
    '0': '0',
    '1': '1',
    '8': '8',
    '6': '9',
    '9': '6',
  };

  let left = 0, right = num.length - 1;
  while (left <= right) {
    let leftChar = num[left];
    let rightChar = num[right];
    if (rotateDigits[rightChar] == null || leftChar !== rotateDigits[rightChar]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
};
// @lc code=end


/**
 * - Time complexity: O(N).
 * - Space complexity: O(1).
 */