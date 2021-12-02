/*
 * @lc app=leetcode id=451 lang=javascript
 *
 * [451] Sort Characters By Frequency
 */

/**
 * 
 * tags: #hash-table, #frequency, #sorting
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
  const strMap = {};
  for (const c of s) {
    strMap[c] = (strMap[c] || 0) + 1;
  }

  let sortedKeyHeap = Object.keys(strMap).sort((a, b) => strMap[a] - strMap[b]);

  let ans = '';
  while (sortedKeyHeap.length > 0) {
    const c = sortedKeyHeap.pop();
    ans += c.repeat(strMap[c]);
  }

  return ans;
};
// @lc code=end


/**
 * - Time complexity: O(n log n).
 * 
 * - Space complexity: O(n). 
 *   The hashmap use O(k) space.
 */
