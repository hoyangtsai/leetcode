/*
 * @lc app=leetcode id=837 lang=javascript
 *
 * [837] New 21 Game
 */

/**
 * tags: #dynamic-programming, #game-theory
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @param {number} maxPts
 * @return {number}
 */
var new21Game = function(n, k, maxPts) {
  let dp = Array(n + 1);
  dp[0] = 1;
  let s = k > 0 ? 1 : 0;
  for (let i = 1; i <= n; i++) {
    dp[i] = s / maxPts;
    if (i < k) {
      s += dp[i];
    }
    if (i - maxPts >= 0 && i - maxPts < k) {
      s -= dp[i - maxPts];
    }
  }
  console.log('dp :>> ', dp);

  let ans = 0;
  for (let i = k; i <= n; i++) {
    ans += dp[i];
  }
  return ans;
};
// @lc code=end


/**
 * - Time complexity: O(n).
 * - Space complexity: O(1).
 */

console.log(new21Game(6, 1, 10))
