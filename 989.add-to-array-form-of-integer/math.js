/*
 * @lc app=leetcode id=989 lang=javascript
 *
 * [989] Add to Array-Form of Integer
 */

/**
 * tags: #math, #calculation
 * {@link 415.add-strings.js}
 */

// @lc code=start
/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
  k = String(k);
  let i = num.length - 1, j = k.length - 1;

  let sum = [];
  let carry = 0;
  // value = sum % 10
  // carry = sum / 10
  while (i >= 0 || j >= 0) {
    const x1 = i >= 0 ? num[i] - '0' : 0; // - '0' = parseInt
    const x2 = j >= 0 ? k[j] - '0' : 0;
    const value = (x1 + x2 + carry) % 10;
    carry = parseInt((x1 + x2 + carry) / 10); // get integer only without floats
    sum.unshift(value);
    i--;
    j--;
  }

  if (carry > 0) sum.unshift(carry);

  return sum;
};
// @lc code=end

