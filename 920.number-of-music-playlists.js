/*
 * @lc app=leetcode id=920 lang=javascript
 *
 * [920] Number of Music Playlists
 */

/**
 * tags: #dynamic-programming
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} goal
 * @param {number} k
 * @return {number}
 */
var numMusicPlaylists = function(n, goal, k) {
  const MOD = 1e9 + 7;

  let dp = Array.from(Array(goal + 1).fill(0), () => Array(n + 1).fill(0));
  dp[0][0] = 1;

  for (let i = 1; i <= goal; i++) {
    for (let j = 1; j <= Math.min(i, n); j++) {
      // The i-th song is a new song
      dp[i][j] = dp[i - 1][j - 1] * (n - j + 1) % MOD;
      // The i-th song is a song we have played before
      if (j > k) {
        dp[i][j] = (dp[i][j] + dp[i - 1][j] * (j - k)) % MOD;
      }
    }
  }

  return dp[goal][n];
};
// @lc code=end


/**
 * - Time complexity: O(goal * n)
 * - Space complexity: O(goal * n)
 */