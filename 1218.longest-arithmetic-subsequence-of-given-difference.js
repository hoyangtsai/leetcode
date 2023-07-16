/*
 * @lc app=leetcode id=1218 lang=javascript
 *
 * [1218] Longest Arithmetic Subsequence of Given Difference
 */

/**
 * tags: #dynamic-programming
 * 
 * Don't need be continuous subsequence
 * ex. [1,5,7,8,5,3,4,2,1], difference = -2, answer is 4
 *          _   _ _     _
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
var longestSubsequence = function(arr, difference) {
  let dp = [];
  let answer = 0;
  for (const a of arr) {
    let beforeA = dp[a - difference] || 0;
    dp[a] = beforeA + 1;
    answer = Math.max(answer, dp[a]);
  }
  return answer;
};
// @lc code=end


/**
 * - Time complexity: O(n)
 * - Space complexity: O(n)
 */