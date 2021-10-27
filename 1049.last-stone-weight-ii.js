/*
 * @lc app=leetcode id=1049 lang=javascript
 *
 * [1049] Last Stone Weight II
 */

// @google
// #dynamic-programming, #01-knapsack, #背包最值問題
// &322

// @lc code=start
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function(stones) {
  let sum = stones.reduce((acc, curr) => acc + curr, 0);

  let target = parseInt(sum / 2);

  let dp = new Array(target + 1).fill(0);

  for (const stone of stones) {
    for (let i = target; i >= stone; i--) {
      dp[i] = Math.max(dp[i], dp[i - stone] + stone);      
    }
  }

  return sum - 2 * dp[target];
};
// @lc code=end

