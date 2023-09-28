/*
 * @lc app=leetcode id=202 lang=javascript
 *
 * [202] Happy Number
 */

/**
 * tags: #floyd-tortoise-and-hare
 * {@link 141.linked-list-cycle.js}
 * {@link 287.find-the-duplicate-number.js}
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
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

  let slowRunner = n;
  let fastRunner = getNext(n);

  while (fastRunner != 1 && slowRunner != fastRunner) {
    slowRunner = getNext(slowRunner);
    fastRunner = getNext(getNext(fastRunner));
  }

  return fastRunner == 1;
};
// @lc code=end


/**
 * - Time complexity: O(log n).
 *   If there is no cycle, then the fast runner will get to 1, and the slow runner will get halfway to 1.
 *   Because there were 2 runners instead of 1, we know that at worst, the cost was O(2 * log n) = O(log n).
 * 
 * - Space complexity: O(1). 
 */