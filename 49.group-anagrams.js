/*
 * @lc app=leetcode id=49 lang=javascript
 *
 * [49] Group Anagrams
 */

/**
 * tags: #hash-table, #anagram, #palindrome, #string-group
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const mapping = {};
  for (let i = 0; i < strs.length; i++) {
    let str = strs[i];
    let sorted = str.split('').sort().join('');

    if (!mapping[sorted]) {
      mapping[sorted] = [str];
    } else {
      mapping[sorted].push(str);
    }
  }

  let output = [];
  for (let arr in mapping) {
    output.push(mapping[arr]);
  }

  return output;
};
// @lc code=end

