/*
 * @lc app=leetcode id=1312 lang=javascript
 *
 * [1312] Minimum Insertion Steps to Make a String Palindrome
 */

/**
 * tags: #dynamic-programming, #palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function (s) {
  let dp = Array.from(Array(s.length + 1).fill(0), () => Array(s.length + 1).fill(0));

  let rev = s.split('');
  rev = rev.reverse();
  rev = rev.join('');

  for (let row = 1; row <= s.length; row++)
    for (let col = 1; col <= s.length; col++) {
      if (s[row - 1] === rev[col - 1])
        dp[row][col] = 1 + dp[row - 1][col - 1];
      else
        dp[row][col] = Math.max(dp[row - 1][col], dp[row][col - 1]);
    }

  return s.length - dp[s.length][s.length];
};
// @lc code=end


/**
 * - Time complexity: O(n^2).
 * - Space complexity: O(n^2).
 */