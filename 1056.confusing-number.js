/*
 * @lc app=leetcode id=1056 lang=javascript
 *
 * [1056] Confusing Number
 */

/**
 * tags: #hash-table
 * {@link 246.strobogrammatic-number.js}
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var confusingNumber = function(n) {
  const confuseNumber = {
    0: 0,
    1: 1,
    8: 8,
    6: 9,
    9: 6,
  };

  let x = n;
  let rotateNum = 0;
  while (x != 0) {
    let remainder = x % 10;
    if (confuseNumber[remainder] == null) return false;
    rotateNum = rotateNum * 10 + parseInt(confuseNumber[remainder]);
    x = parseInt(x / 10);
  }
  
  return rotateNum == n ? false : true;
};
// @lc code=end


console.log(confusingNumber(6));