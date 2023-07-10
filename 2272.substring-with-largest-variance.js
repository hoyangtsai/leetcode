/*
 * @lc app=leetcode id=2272 lang=javascript
 *
 * [2272] Substring With Largest Variance
 */

/**
 * tags: #kadane-algorithm
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var largestVariance = function(s) {  
  let counter = Array(26).fill(0);
  for (const ch of s) {
    counter[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;
  }

  let globalMax = 0;

  for (let i = 0; i < 26; i++) {
    for (let j = 0; j < 26; j++) {
      // major and minor cannot be the same, and both must appear in s.
      if (i == j || counter[i] == 0 || counter[j] == 0) {
        continue;
      }

      // Find the maximum variance of major - minor.        
      let major = String.fromCharCode(i + 'a'.charCodeAt(0));
      let minor = String.fromCharCode(j + 'a'.charCodeAt(0));
      let majorCount = 0;
      let minorCount = 0;
      
      // The remaining minor in the rest of s.
      let restMinor = counter[j];
      
      for (const ch of s) {    
        if(ch == major) {
          majorCount++;
        }
        if(ch == minor) {
          minorCount++;
          restMinor--;
        }

        // Only update the variance if there is at least one minor.
        if (minorCount > 0)
          globalMax = Math.max(globalMax, majorCount - minorCount);
    
        // We can discard the previous string if there is at least one remaining minor.
        if (majorCount < minorCount && restMinor > 0) {
          majorCount = 0;
          minorCount = 0;
        }
      }
    }
  }

  return globalMax;
};
// @lc code=end


/**
 * - Time complexity: O(n * k^2)
 * - Space complexity: O(1)
 */