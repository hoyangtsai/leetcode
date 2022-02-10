/*
 * @lc app=leetcode id=243 lang=javascript
 *
 * [243] Shortest Word Distance
 */

/**
 * tags: #word-distances, #two-pointers
 */

// @lc code=start
/**
 * @param {string[]} wordsDict
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function(wordsDict, word1, word2) {
  let p1 = -1, p2 = -1, minDistance = wordsDict.length;

  for (let i = 0; i < wordsDict.length; i++) {
    if (wordsDict[i] === word1) {
      p1 = i;
    }
    if (wordsDict[i] === word2) {
      p2 = i;
    }
    if (p1 !== -1 && p2 !== -1) {
      minDistance = Math.min(minDistance, Math.abs(p1 - p2));
      if (minDistance === 1) return minDistance;
    }
  }

  return minDistance;
};
// @lc code=end


/**
 * - Time complexity: O(N * M) where N is the number of words in the input list, and M is the total length of two input words.
 * - Space complexity: O(1).
 */