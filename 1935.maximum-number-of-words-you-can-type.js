/*
 * @lc app=leetcode id=1935 lang=javascript
 *
 * [1935] Maximum Number of Words You Can Type
 */

// @lc code=start
/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function(text, brokenLetters) {
  const brokenSet = new Set(brokenLetters);
  const words = text.split(' ');
  let count = 0;

  for (const word of words) {
    let canBeTyped = true;
    for (const ch of word) {
      if (brokenSet.has(ch)) {
        canBeTyped = false;
        break;
      }
    }
    if (canBeTyped) {
      count++;
    }
  }

  return count;
};
// @lc code=end

