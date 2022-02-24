/*
 * @lc app=leetcode id=159 lang=javascript
 *
 * [159] Longest Substring with At Most Two Distinct Characters
 */

/**
 * tags: #hash-table, #sliding-window, #longest-substring
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringTwoDistinct = function(s) {
  let n = s.length;
  // need more than two chars
  if (n < 3) {
    return n;
  }

  let l = 0, r = 0;
  let maxLen = 2;

  // hash table only contains exact two chars
  let hash = new Map();

  while (r < n) {
    hash.set(s[r], r++);

    if (hash.size == 3) {
      // find the leftmost index to delete
      let deleteId = n;
      for (let v of hash.values()) {
        deleteId = Math.min(deleteId, v);
      }
      hash.delete(s[deleteId]);
      l = deleteId + 1;
    }

    maxLen = Math.max(maxLen, r - l);
  }

  return maxLen;
};
// @lc code=end


lengthOfLongestSubstringTwoDistinct('abc');