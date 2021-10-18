/*
 * @lc app=leetcode id=153 lang=javascript
 *
 * [153] Find Minimum in Rotated Sorted Array
 */

// @microsoft, @amazon, @facebook
// #array, #binary-search
// &33

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  // If the list has just one element then return that element.
  if (nums.length == 1) {
    return nums[0];
  }

  let l = 0, r = nums.length - 1;

  // if the last element is greater than the first element then there is no rotation.
  // e.g. 1 < 2 < 3 < 4 < 5 < 7. Already sorted array.
  // Hence the smallest element is first element. A[0]
  if (nums[r] > nums[0]) {
    return nums[0];
  }

  // if mid element > first element of array, look for the inflection point on the right of mid
  // if mid element < first element of array, look for the inflection point on the left of mid
  while (l <= r) {
    let mid = ~~((l + r) / 2);

    // if the mid element is greater than its next element then mid+1 element is the smallest
    // This point would be the point of change. From higher to lower value.
    if (nums[mid] > nums[mid + 1]) {
      return nums[mid + 1];
    }

    // if the mid element is lesser than its previous element then mid element is the smallest
    if (nums[mid - 1] > nums[mid]) {
      return nums[mid];
    }

    // if the mid elements value is greater than the 0th element this means
    // the least value is still somewhere to the right as we are still dealing with elements
    // greater than nums[0]
    if (nums[mid] > nums[0]) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }

  return -1;
};
// @lc code=end


/**
 * Binary search
 * 
 * - Time complexity: O(log N).
 * - Space complexity: O(1).
 */