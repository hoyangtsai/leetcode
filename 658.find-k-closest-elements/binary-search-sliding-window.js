/*
 * @lc app=leetcode id=658 lang=javascript
 *
 * [658] Find K Closest Elements
 */

/**
 * tags: sliding-window, #binary-search
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
  let result = [];
  // base case
  if (arr.length == k) {
    for (let i = 0; i < arr.length; i++) {
      result.push(arr[i]);
    }
    return result;
  }

  let left = 0;
  let right = arr.length;
  while (left < right) {
    let mid = parseInt((left + right) / 2);
    if (arr[mid] >= x) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  // initial sliding window bounds
  left -= 1;
  right = left + 1;

  // while the window size is less than k
  while (right - left - 1 < k) {
    // Be careful to not go out of bounds
    if (left == -1) {
      right += 1;
      continue;
    }

    // Expand the window towards the side with the closer number
    // Be careful to not go out of bounds with the pointers
    if (right == arr.length || Math.abs(arr[left] - x) <= Math.abs(arr[right] - x)) {
      left -= 1;
    } else {
      right += 1;
    }
  }

  // Build and return the window
  for (let i = left + 1; i < right; i++) {
    result.push(arr[i]);
  }

  return result;
};
// @lc code=end


/**
 * - Time complexity: O(log(N) + k)
 * - Space complexity: O(1)
 */