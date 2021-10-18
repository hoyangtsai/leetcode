/*
 * @lc app=leetcode id=246 lang=javascript
 *
 * [246] Strobogrammatic Number
 */

// @google
// #hash-table, #two-pointers

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

  for (let left = 0, right = num.length - 1; left <= right; left++, right--) {
    let leftChar = num[left];
    let rightChar = num[right];
    if (rotateDigits[rightChar] == null || leftChar !== rotateDigits[rightChar]) {
      return false;
    }
  }

  return true;
};
// @lc code=end

/**
 * Two Pointers
 * 
 * - Time complexity: O(N).
 * - Space complexity: O(1).
 */