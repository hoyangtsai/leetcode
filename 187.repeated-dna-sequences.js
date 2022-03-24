/*
 * @lc app=leetcode id=187 lang=javascript
 *
 * [187] Repeated DNA Sequences
 */

/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
  let seen = {};
  let set = new Set();
  for (let i = 0; i < s.length - 9; i++){
    let curTen = s.substring(i, i + 10);
    if (seen[curTen] == null) {
      seen[curTen] = 1;
    }else{
      set.add(curTen);
    }
  }
  return Array.from(set);
};
// @lc code=end
