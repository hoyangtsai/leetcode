/*
 * @lc app=leetcode id=389 lang=javascript
 *
 * [389] Find the Difference
 */

/**
 * tags: #hash-table, #two-string-calculation
 * {@link 205.isomorphic-strings.js}
 * {@link 136.single-number/}
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  // string t is a substring of string s
  // s is shorter than t
  // after we iterate string t, all possible characters are seen

  let counterS = {};
  for (const c of s) {
    counterS[c] = (counterS[c] || 0) + 1;
  }

  let ans = '';
  for (const c of t) {
    if (counterS[c] != null) {
      counterS[c]--;
      if (counterS[c] == 0) delete counterS[c];
    } else {
      ans += c;
    }
  }

  return ans;
};
// @lc code=end


/**
 * - Time complexity: O(N), where N is the length of strings. Since, we iterate through both strings once.
 * 
 * - Space complexity: O(1).
 *   The problem states string s and string t have lowercase letters. 
 *   Thus, the total number of unique characters and eventually buckets in the hash map possible are just 26.
 */