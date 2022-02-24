/*
 * @lc app=leetcode id=1207 lang=javascript
 *
 * [1207] Unique Number of Occurrences
 */

/**
 * tags: #hash-table, #set
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
  let map = {};
  for (const num of arr) {
    map[num] = (map[num] || 0) + 1;
  }
  const uniqNums = new Set(arr);
  const uniqOccur = new Set(Object.values(map));

  return uniqOccur.size === uniqNums.size;
};
// @lc code=end

