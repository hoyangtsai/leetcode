/*
 * @lc app=leetcode id=1647 lang=javascript
 *
 * [1647] Minimum Deletions to Make Character Frequencies Unique
 */

/**
 * tags: #char-code
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function(s) {
  let frequency = Array(26).fill(0);
  for (const c of s) {
    frequency[c.charCodeAt() - 'a'.charCodeAt()]++;
  }
  
  let deleteCount = 0;
  let seenFrequencies = new Set();
  for (let i = 0; i < 26; i++) {
    // Keep decrementing the frequency until it is unique
    while (frequency[i] > 0 && seenFrequencies.has(frequency[i])) {
      frequency[i]--;
      deleteCount++;
    }

    // Add the newly occupied frequency to the set
    seenFrequencies.add(frequency[i]);
  }

  return deleteCount;
};
// @lc code=end


/**
 * - Time complexity: O(N + K^2)
 * - Space complexity: O(K)
 */