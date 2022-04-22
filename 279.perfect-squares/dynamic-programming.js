/*
 * @lc app=leetcode id=279 lang=javascript
 *
 * [279] Perfect Squares
 */

/**
 * tags: #dynamic-programming
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  let dp = Array(n + 1).fill(Number.MAX_VALUE);
  dp[0] = 0;
  
  // pre-calculate the square numbers.
  let maxSqrtIndex = parseInt(Math.sqrt(n)) + 1;
  let squareNums = Array(maxSqrtIndex).fill(0);

  for (let i = 1; i < maxSqrtIndex; i++) {
    squareNums[i] = i * i;
  }

  for (let i = 1; i <= n; i++) {
    for (let s = 1; s < maxSqrtIndex; s++) {
      if (i < squareNums[s]) break;

      dp[i] = Math.min(dp[i], dp[i - squareNums[s]] + 1);
    }
  }
  return dp[n];
};
// @lc code=end


/**
 * - Time complexity: O(n * sqrt(n))
 * - Space complexity: O(n)
 */


console.log(numSquares(12));