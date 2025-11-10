/*
 * @lc app=leetcode id=3346 lang=javascript
 *
 * [3346] Maximum Frequency of an Element After Performing Operations I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} numOperations
 * @return {number}
 */
var maxFrequency = function(nums, k, numOperations) {
  const range = new Map();
  const freq = new Map();

  let minRange = Infinity;
  let maxRange = -Infinity;
  
  for (const num of nums) {
    freq.set(num, (freq.get(num) || 0) + 1);

    const start = num - k;
    const end = num + k;

    minRange = Math.min(minRange, start);
    maxRange = Math.max(maxRange, end);

    range.set(start, (range.get(start) || 0) + 1);
    range.set(end + 1, (range.get(end + 1) || 0) - 1);
  }

  let ans = 1;
  for (let i = minRange; i <= maxRange; i++) {
    range.set(i , (range.get(i) || 0) + (range.get(i - 1) || 0));

    const currentFreq = freq.get(i) || 0;
    let maxFreq = range.get(i) - currentFreq;

    maxFreq = Math.min(maxFreq, numOperations);
    ans = Math.max(ans, currentFreq + maxFreq);
  }

  return ans;
};
// @lc code=end

