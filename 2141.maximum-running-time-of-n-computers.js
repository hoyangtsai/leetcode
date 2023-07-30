/*
 * @lc app=leetcode id=2141 lang=javascript
 *
 * [2141] Maximum Running Time of N Computers
 */

/**
 * tags: #binary-search
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[]} batteries
 * @return {number}
 */
var maxRunTime = function(n, batteries) {
  batteries.sort((a, b) => a - b);
  
  let l = 1, r = Math.floor(batteries.reduce((a, b) => a + b) / n);

  while (l < r) {
    let target = r - parseInt((r - l) / 2);
    let total = batteries.reduce((a, b) => a + Math.min(b, target), 0);

    if (total >= target * n) {
      l = target;
    } else {
      r = target - 1;
    }
  }

  return l;
};
// @lc code=end


/**
 * - Time complexity: O(m * log K)
 * - Space complexity: O(1)
 */