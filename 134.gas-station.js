/*
 * @lc app=leetcode id=134 lang=javascript
 *
 * [134] Gas Station
 */

/**
 * tags: #greedy
 */

// @lc code=start
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
  let sum = 0, minSum = Number.MAX_VALUE;
  let start = 0;
  for (let i = 0; i < gas.length; i++) {
    sum += gas[i] - cost[i];
    if (sum < minSum) {
      start = i + 1;
      minSum = sum;
    }
  }
  if (sum < 0) {
    return -1;
  }
  return start == gas.length ? 0 : start;
};
// @lc code=end

