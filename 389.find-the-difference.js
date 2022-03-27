/*
 * @lc app=leetcode id=389 lang=javascript
 *
 * [389] Find the Difference
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  // t string is added by s
  // t is always longer than s

  let charMap = {};
  for (const c of t) {
    charMap[c] = (charMap[c] || 0) + 1;
  }

  let ans = '';
  for (const c of s) {
    if (charMap[c] != null) {
      charMap[c]--;
      if (charMap[c] == 0) delete charMap[c];
    } else {
      ans += c;
    }
  }

  // characters never shown on s
  ans += Object.keys(charMap).join('');
  return ans;
};
// @lc code=end
