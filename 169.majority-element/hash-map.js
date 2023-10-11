/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 */

/**
 * tags: #hash-table, #hash-map
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let counts = new Map();
  for (const n of nums) {
    if (!counts.has(n)) {
      counts.set(n, 1);
    } else {
      counts.set(n, counts.get(n) + 1);
    }
  }

  let majorityEntity = new Map();
  for (const [num, count] of counts) {
    if (majorityEntity.size == 0 || count > majorityEntity.values().next().value) {
      majorityEntity = new Map([[num, count]]);
    }
  }
  return majorityEntity.keys().next().value;
};
// @lc code=end


/**
 * - Time complexity: O(n)
 * - Space complexity: O(n)
 */
