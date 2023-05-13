/*
 * @lc app=leetcode id=2140 lang=javascript
 *
 * [2140] Solving Questions With Brainpower
 */

/**
 * tags: #dynamic-programming
 */

// @lc code=start
/**
 * @param {number[][]} questions
 * @return {number}
 */
var mostPoints = function(questions) {
  let n = questions.length;
  let dp = Array(n).fill(0);
  dp[n - 1] = questions[n - 1][0];
        
  for (let i = n - 2; i >= 0; --i) {
    dp[i] = questions[i][0];
    let skip = questions[i][1];
    if (i + skip + 1 < n) {
      dp[i] += dp[i + skip + 1];
    }
    
    // dp[i] = max(solve it, skip it)
    dp[i] = Math.max(dp[i], dp[i + 1]);
  }
  
  return dp[0];
};
// @lc code=end


/**
 * - Time complexity: O(n).
 * - Space complexity: O(n).
 */