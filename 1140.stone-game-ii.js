/*
 * @lc app=leetcode id=1140 lang=javascript
 *
 * [1140] Stone Game II
 */

/**
 * tags: #dynamic-programming, #game-theory
 */

// @lc code=start
/**
 * @param {number[]} piles
 * @return {number}
 */
var stoneGameII = function(piles) {
  function f(piles, dp, p, i, m) {
    if (i == piles.length) {
      return 0;
    }
    if (dp[p][i][m] != -1) {
      return dp[p][i][m];
    }

    let res = p == 1 ? 1000000 : -1, s = 0;
    for (let x = 1; x <= Math.min(2 * m, piles.length - i); x++) {
      s += piles[i + x - 1];
      if (p == 0) {
        res = Math.max(res, s + f(piles, dp, 1, i + x, Math.max(m, x)));
      }
      else {
        res = Math.min(res, f(piles, dp, 0, i + x, Math.max(m, x)));
      }
    }
    return dp[p][i][m] = res;
  }

  let dp = Array.from(Array(2).fill(-1), () =>
    Array.from(Array(piles.length + 1).fill(-1), () => Array(piles.length + 1).fill(-1))
  );

  return f(piles, dp, 0, 0, 1);
};
// @lc code=end


/**
 * - Time complexity: O(n^3).
 * - Space complexity: O(n^2).
 */