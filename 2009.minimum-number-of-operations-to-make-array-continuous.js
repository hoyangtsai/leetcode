/*
 * @lc app=leetcode id=2009 lang=javascript
 *
 * [2009] Minimum Number of Operations to Make Array Continuous
 */

/**
 * tags: #binary-search
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
  function binarySearch(newNums, target) {
    let left = 0, right = newNums.length;
    while (left < right) {
      let mid = parseInt((left + right) / 2);
      if (target < newNums[mid]) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    return left;
  }

  const n = nums.length;
  let unique = new Set(nums);

  let newNums = Array(unique.size).fill(0);
  let index = 0;
  for (const num of unique) {
    newNums[index++] = num;
  }

  newNums.sort((a, b) => a - b);

  let ans = n;
  for (let i = 0; i < newNums.length; i++) {
    let left = newNums[i];
    let right = left + n - 1;
    let j = binarySearch(newNums, right);
    let count = j - i;
    ans = Math.min(ans, n - count);
  }
  return ans;
};
// @lc code=end


/**
 * - Time complexity: O(n log n)
 * - Space complexity: O(n)
 */