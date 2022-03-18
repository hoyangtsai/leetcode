/*
 * @lc app=leetcode id=202 lang=javascript
 *
 * [202] Happy Number
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  const cycleMembers = [4, 16, 37, 58, 89, 145, 42, 20];

  function getNext(n) {
    let totalSum = 0;
    // 2+ numbers square
    // 19
    // d = 9, n = 1
    // d = 1, n = 0
    while (n > 0) {
      let d = n % 10;
      n = parseInt(n / 10);
      totalSum += d * d;
    }
    return totalSum;
  }

  while (n != 1 && !cycleMembers.includes(n)) {
    n = getNext(n);
  }

  return n == 1;
};
// @lc code=end


