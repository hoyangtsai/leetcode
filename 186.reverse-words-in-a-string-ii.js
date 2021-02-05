/*
 * @lc app=leetcode id=186 lang=javascript
 *
 * [186] Reverse Words in a String II
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseWords = function(s) {
  s.reverse();

  let i = 0;
  let j = 0;

  while (j <= s.length) {
    // visit space or the last word
    if (s[j] === ' ' || j === s.length) {
      for (let a = i, b = j - 1; a < b; a++, b--) {
        [s[a], s[b]] = [s[b], s[a]];
      }
      j = j + 1;
      i = j;
    } else {
      j++;
    }
  }
};
// @lc code=end

let arr = ["t","h","e"," ","s","k","y"," ","i","s"," ","b","l","u","e"];
reverseWords(arr)

console.log('arr =>', arr);