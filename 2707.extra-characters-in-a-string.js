/*
 * @lc app=leetcode id=2707 lang=javascript
 *
 * [2707] Extra Characters in a String
 */

/**
 * tags: #hash-table, #word-dictionary, #trie
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {number}
 */
var minExtraChar = function(s, dictionary) {
  const n = s.length;
  const dictionarySet = new Set(dictionary);
  let dp = Array(n + 1).fill(0);

  for (let start = n - 1; start >= 0; start--) {
    dp[start] = dp[start + 1] + 1;
    for (let end = start; end < n; end++) {
      let curr = s.substring(start, end + 1); {
        if (dictionarySet.has(curr)) {
          dp[start] = Math.min(dp[start], dp[end + 1]);
        }
      }
    }
  }

  return dp[0];
};
// @lc code=end


/**
 * Let N be the total of characters in the string.
 * Let M be the average length of the strings in dictionary.
 * Let K be the length of the dictionary
 * 
 * - Time complexity: O(n^3)
 * - Space complexity: O(N + M * K)
 */