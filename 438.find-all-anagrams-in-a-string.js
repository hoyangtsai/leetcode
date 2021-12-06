/*
 * @lc app=leetcode id=438 lang=javascript
 *
 * [438] Find All Anagrams in a String
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

  // get p string each letter appear time in the alphabet
  let pCount = Array(26).fill(0);
  for (const c of p) {
    pCount[c.charCodeAt() - 'a'.charCodeAt()]++;
  }

  let res = [];
  for (let r = 0, l = 0; r < ns; r++) {
    let rCharCode = s[r].charCodeAt(0) - 'a'.charCodeAt();
    pCount[rCharCode]--;

    while (pCount[rCharCode] < 0) {
      const lCharCode = s[l].charCodeAt(0) - 'a'.charCodeAt();
      pCount[lCharCode]++;
      l++;
    }

    if (r - l === np - 1) {
      res.push(l);
    }
  }

  return res;
};
// @lc code=end

