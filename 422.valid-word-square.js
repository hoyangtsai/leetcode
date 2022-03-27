/*
 * @lc app=leetcode id=422 lang=javascript
 *
 * [422] Valid Word Square
 */

/**
 * tags: #matrix
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {boolean}
 */
var validWordSquare = function(words) {
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    for (let j = 0; j < word.length; j++) {
      // too long
      if (j >= words.length) return false;
      // too short
      if (words[j].length <= i) return false;
      // letter not equal
      if (word.charAt(j) != words[j].charAt(i)) return false;
    }
  }

  return true;
};
// @lc code=end


/**
 * - Time complexity: O(m * n).
 * - Space complexity: O(1).
 */