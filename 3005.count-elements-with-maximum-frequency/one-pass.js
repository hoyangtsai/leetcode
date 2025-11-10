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
  let maxFreq = 0;
  let totalFrequencies = 0;
  for (const num of nums) {
    const freq = (freqMap.get(num) || 0) + 1;
    freqMap.set(num, freq);

    const currentFreq = freqMap.get(num);

    if (currentFreq > maxFreq) {
      maxFreq = currentFreq;
      totalFrequencies = currentFreq;
    } else if (currentFreq === maxFreq) {
      totalFrequencies += currentFreq;
    }
  }

  return totalFrequencies;
};
// @lc code=end


/**
 * - Time complexity: O(n).
 * - Space complexity: O(n).
 */