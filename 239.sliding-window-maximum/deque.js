/*
 * @lc app=leetcode id=239 lang=javascript
 *
 * [239] Sliding Window Maximum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  if (k === 1) return nums;

  let deq = [];
  const n = nums.length;

  function cleanDeque(i, k) {
    // remove indexes of elements not from sliding window
    if (deq.length > 0 && deq[0] === i - k) {
      deq.shift();
    }
    // remove from deq indexes of all elements 
    // which are smaller than current element nums[i]
    while (deq.length > 0 && nums[i] > nums[deq[deq.length - 1]]) {
      deq.pop();
    }
  }

 
  let maxId = 0;
  for (let i = 0; i < k; i++) {
    cleanDeque(i, k);
    deq.push(i);
    // compute max in nums[:k]
    if (nums[i] > nums[maxId]) maxId = i;
  }
  let output = Array(n - k + 1);
  output[0] = nums[maxId];

  // build output
  for (let i = k; i < n; i++) {
    cleanDeque(i, k);
    deq.push(i);
    output[i - k + 1] = nums[deq[0]];
  }

  return output;
};
// @lc code=end

