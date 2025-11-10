/*
 * @lc app=leetcode id=3005 lang=javascript
 *
 * [3005] Count Elements With Maximum Frequency
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
  const freqMap = new Map();
  for (const num of nums) {
    const freq = (freqMap.get(num) || 0) + 1;
    freqMap.set(num, freq);
  }

  let maxFreq = 0;
  for (const freq of freqMap.values()) {
    maxFreq = Math.max(maxFreq, freq);
  }
  
  let maxFrequencyCount = 0;
  for (const freq of freqMap.values()) {
    if (freq === maxFreq) {
      maxFrequencyCount += 1;
    }
  }

  return maxFrequencyCount * maxFreq;
};
// @lc code=end


/**
 * - Time complexity: O(n).
 * - Space complexity: O(n).
 */