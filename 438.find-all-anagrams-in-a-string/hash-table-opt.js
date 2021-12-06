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

  let charMap = {};
  for (const c of p) {
    charMap[c] = (charMap[c] || 0) + 1;
  }

  let res = [];
  let count = np;
  for (let r = 0, l = 0; r < ns;) {
    if (charMap[s[r]] > 0) count--;

    charMap[s[r]]--;
    r++;

    if (count === 0) res.push(l);

    if (r - l == np) {
      if (charMap[s[l]] >= 0) count++;

      charMap[s[l]]++;
      l++;
    }
  }

  return res;
};
// @lc code=end


/**
 * - Time complexity: O(n).
 * - Space complexity: O(n).
 */