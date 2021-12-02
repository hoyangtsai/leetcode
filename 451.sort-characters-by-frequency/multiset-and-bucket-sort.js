/*
 * @lc app=leetcode id=451 lang=javascript
 *
 * [451] Sort Characters By Frequency
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
  // Count up the concurrences
  const strMap = {};
  for (const c of s) {
    strMap[c] = (strMap[c] || 0) + 1;
  }

  let maxFrequency = Math.max(...Object.values(strMap));
  // Make the list of buckets and apply bucket sort.
  const buckets = Array(maxFrequency + 1).fill([]);
  for (const [char, freq] of Object.entries(strMap)) {
    buckets[freq] = [...buckets[freq], char];
  }

  let ans = '';
  for (let i = buckets.length - 1; i >= 1; i--) {
    for (const c of buckets[i]) {
      ans += c.repeat(i);
    }
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
