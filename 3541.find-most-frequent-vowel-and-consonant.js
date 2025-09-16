/*
 * @lc app=leetcode id=3541 lang=javascript
 *
 * [3541] Find Most Frequent Vowel and Consonant
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    const vowelCount = new Map();
    const consonantCount = new Map();
    for (const ch of s) {
      if (vowels.has(ch)) {
        vowelCount.set(ch, (vowelCount.get(ch) || 0) + 1);
      } else {
        consonantCount.set(ch, (consonantCount.get(ch) || 0) + 1);
      }
    }

    const maxVowelFreq = Math.max(...vowelCount.values(), 0);
    const maxConsonantFreq = Math.max(...consonantCount.values(), 0);
    
    return maxVowelFreq + maxConsonantFreq;
};
// @lc code=end

