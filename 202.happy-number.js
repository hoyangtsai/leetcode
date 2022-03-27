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
  function getNext(n) {
    let totalSum = 0;
    while (n != 0) {
      let d = n % 10;
      n = parseInt(n / 10);
      totalSum += d * d;
    }
    return totalSum;
  }

  let slowRunner = n;
  let fastRunner = getNext(n);

  while (fastRunner != 1 && slowRunner != fastRunner) {
    slowRunner = getNext(slowRunner);
    fastRunner = getNext(getNext(fastRunner));
  }

  return fastRunner == 1;
};
// @lc code=end

