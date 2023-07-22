/*
 * @lc app=leetcode id=300 lang=javascript
 *
 * [300] Longest Increasing Subsequence
 */

/**
 * tags: #binary-search, #LIS
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  function binarySearch(sub, num) {
    let left = 0;
    let right = sub.length - 1;

    while (left < right) {
      let mid = parseInt((left + right) / 2);
      if (sub[mid] == num) {
        return mid;
      } 
      
      if (sub[mid] < num) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    return left;
  }

  let sub = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
    let num = nums[i];
    if (num > sub[sub.length - 1]) {
      sub.push(num);
    } else {
      let j = binarySearch(sub, num);
      // replace
      sub[j] = num;
    }
  }

  return sub.length;
};
// @lc code=end


/**
 * - Time complexity: O(N log N).
 * - Space complexity: O(N).
 */