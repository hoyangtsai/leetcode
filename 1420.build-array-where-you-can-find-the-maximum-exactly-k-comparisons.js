/*
 * @lc app=leetcode id=1420 lang=javascript
 *
 * [1420] Build Array Where You Can Find The Maximum Exactly K Comparisons
 */

/**
 * tags: #dynamic-programming
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var numOfArrays = function(n, m, k) {
  const MOD = 1e9 + 7;

  function dp(i, maxSoFar, remain) {
    if (i == n) {
      if (remain == 0) {
        return 1;
      }
      
      return 0;
    }

    if (remain < 0) {
      return 0;
    }
  
    if (memo[i][maxSoFar][remain] != -1) {
      return memo[i][maxSoFar][remain];
    }
  
    let ans = 0;
    for (let num = 1; num <= maxSoFar; num++) {
      ans = (ans + dp(i + 1, maxSoFar, remain)) % MOD;
    }

    for (let num = maxSoFar + 1; num <= m; num++) {
      ans = (ans + dp(i + 1, num, remain - 1)) % MOD;
    }
  
    memo[i][maxSoFar][remain] = ans;
    return ans;
  }

  let memo = Array(n + 1).fill()
    .map(x => Array(m + 1).fill().map(y => Array(k + 1).fill(-1).map(z => z)));

  return dp(0, 0, k);
};
// @lc code=end

