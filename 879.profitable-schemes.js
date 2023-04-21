/*
 * @lc app=leetcode id=879 lang=javascript
 *
 * [879] Profitable Schemes
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} minProfit
 * @param {number[]} group
 * @param {number[]} profit
 * @return {number}
 */
var profitableSchemes = function(n, minProfit, group, profit) {
  const MOD = 1e9 + 7;
  const m = group.length;
  const memo = [...new Array(m)].map(() => [...new Array(n + 1)].map(() => new Array(minProfit + 1).fill(-1)));

  function dp(i, remain, total) {
    if (i === m) return total >= minProfit;

    if (memo[i][remain][total] !== -1) return memo[i][remain][total];

    let notTake = dp(i + 1, remain, total);
    let take = 0;
    if (group[i] <= remain) take = dp(i + 1, remain - group[i], Math.min(minProfit, total + profit[i]));
    return memo[i][remain][total] = (notTake + take) % MOD;
  }
  return dp(0, n, 0);
};
// @lc code=end
