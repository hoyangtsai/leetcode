/*
 * @lc app=leetcode id=2024 lang=javascript
 *
 * [2024] Maximize the Confusion of an Exam
 */

/**
 * tags: #sliding-window
 */

// @lc code=start
/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
var maxConsecutiveAnswers = function(answerKey, k) {
  let maxSize = k;
  let count = {
    'T': 0,
    'F': 0,
  };
  for (let i = 0; i < k; i++) {
    count[answerKey[i]]++;
  }
 
  for (let left = 0, right = k; right < answerKey.length; right++) {
    count[answerKey[right]]++;
    while (Math.min(count['T'], count['F']) > k) {
      count[answerKey[left]]--;
      left++;
    }
    maxSize = Math.max(maxSize, right - left + 1);
  }

  return maxSize;
};
// @lc code=end


/**
 * - Time complexity: O(n)
 * - Space complexity: O(1)
 */
