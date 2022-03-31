/*
 * @lc app=leetcode id=410 lang=javascript
 *
 * [410] Split Array Largest Sum
 */

/**
 * tags: #binary-search
 * #google-interview
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function(nums, m) {
  function minimumSubarraysRequired(nums, maxSumAllowed) {
    let currentSum = 0;
    let splitsRequired = 0;

    for (const element of nums) {
      // Add element only if the sum doesn't exceed maxSumAllowed
      if (currentSum + element <= maxSumAllowed) {
        currentSum += element;
      } else {
        // If the element addition makes sum more than maxSumAllowed
        // Increment the splits required and reset sum
        currentSum = element;
        splitsRequired++;
      }
    }

    // Return the number of subarrays, which is the number of splits + 1
    return splitsRequired + 1;
  }

  // Find the sum of all elements and the maximum element
  let sum = 0;
  let maxElement = Number.MIN_VALUE;
  for (const element of nums) {
    sum += element;
    maxElement = Math.max(maxElement, element);
  }

  // Define the left and right boundary of binary search
  let left = maxElement;
  let right = sum;
  let minimumLargestSplitSum = 0;

  while (left <= right) {
    // Find the mid value
    let maxSumAllowed = parseInt(left + (right - left) / 2);

    // Find the minimum splits. If splitsRequired is less than
    // or equal to m move towards left i.e., smaller values
    if (minimumSubarraysRequired(nums, maxSumAllowed) <= m) {
      right = maxSumAllowed - 1;
      minimumLargestSplitSum = maxSumAllowed;
    } else {
      // Move towards right if splitsRequired is more than m
      left = maxSumAllowed + 1;
    }
  }

  return minimumLargestSplitSum;
};
// @lc code=end


/**
 * - Time complexity: O(N * log(S)).
 * - Space complexity: (1).
 */
