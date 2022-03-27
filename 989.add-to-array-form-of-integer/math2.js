/*
 * @lc app=leetcode id=989 lang=javascript
 *
 * [989] Add to Array-Form of Integer
 */

/**
 * tags: #modular-arithmetic
 */

// @lc code=start
/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
  let i = num.length - 1, cur = k;

  let sum = [];
  // value = sum % 10
  // carry = sum / 10
  while (i >= 0 || cur > 0) {
    if (i >= 0) {
      cur += num[i];
    }
    sum.unshift(cur % 10);
    cur = parseInt(cur / 10);
    i--;
  }

  return sum;
};
// @lc code=end

