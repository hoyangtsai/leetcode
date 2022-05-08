/*
 * @lc app=leetcode id=1679 lang=javascript
 *
 * [1679] Max Number of K-Sum Pairs
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
  let map = {};
  for (const n of nums) {
    map[n] = (map[n] || 0) + 1;
  }

  let count = 0;
  for (const n of nums) {
    const remain = k - n;
    if (map[n] > 0 && map[remain] > 0) {
      if ((n == remain) && map[remain] < 2)
        continue;

      map[n] -= 1;
      map[remain] -= 1;
      count++;
    }
  }

  return count;
};
// @lc code=end

