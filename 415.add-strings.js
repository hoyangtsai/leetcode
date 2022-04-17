/*
 * @lc app=leetcode id=415 lang=javascript
 *
 * [415] Add Strings
 */

/**
 * tags: #math, #string-math, #calculation
 * {@link 67.add-binary/}
 * {@link 371.sum-of-two-integers/}
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  let i = num1.length - 1, j = num2.length - 1;
  let carry = 0;
  let sum = '';
  // value = sum % 10
  // carry = sum / 10
  while (i >= 0 || j >= 0)  {
    const x1 = i >= 0 ? parseInt(num1[i]) : 0;
    const x2 = j >= 0 ? parseInt(num2[j]) : 0;
    const value = (x1 + x2 + carry) % 10;
    carry = parseInt((x1 + x2 + carry) / 10); // get integer only without floats
    sum = value + sum;
    i--;
    j--;
  }

  if (carry != 0) sum = carry + sum;

  return sum;
};
// @lc code=end


/**
 * - Time complexity: O(max(N1, N2)).
 * - Space complexity: O(max(N1, N2)).
 */