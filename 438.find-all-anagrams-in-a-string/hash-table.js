/*
 * @lc app=leetcode id=438 lang=javascript
 *
 * [438] Find All Anagrams in a String
 */

/**
 * tags: #hash-table
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  const ns = s.length, np = p.length;
  // base case
  if (ns < np) return [];

  let pCount = {};
  for (const c of p) {
    pCount[c] = (pCount[c] || 0) + 1;
  }

  let sCount = {};
  let res = [];
  for (let i = 0; i < ns; i++) {
    let ch = s[i];
    sCount[ch] = (sCount[ch] || 0) + 1;

    if (i >= np) {
      ch = s[i - np];
      if (sCount[ch] == 1) {
        delete sCount[ch];
      } else {
        sCount[ch]--;
      }
    }

    if (
      Object.keys(pCount).length === Object.keys(sCount).length &&
      Object.keys(pCount).every(c => Object.keys(sCount).includes(c)) &&
      Object.keys(pCount).every(c => sCount[c] === pCount[c])
    ) {
      res.push(i - np + 1);
    }
  }

  return res;
};
// @lc code=end


/**
 * - Time complexity: O(n).
 * - Space complexity: O(n).
 */