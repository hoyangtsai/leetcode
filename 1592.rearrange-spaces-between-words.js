/*
 * @lc app=leetcode id=1592 lang=javascript
 *
 * [1592] Rearrange Spaces Between Words
 */

/**
 * {@link 68.text-justification.js}
 */

// @lc code=start
/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function(text) {
  let arr = text.split(" ");

  let totalSpace = arr.length - 1;

  arr = arr.filter(w => w !== '');

  let spaceBetween = arr.length > 1 ?
    Math.floor(totalSpace / (arr.length - 1)) : 0;
  let spaceLeftOver = arr.length > 1 ?
    totalSpace % (arr.length - 1) : totalSpace;

  return (arr.join(" ".repeat(spaceBetween)) + " ".repeat(spaceLeftOver));
};
// @lc code=end


/**
 * - Time complexity: O(n).
 * - Space complexity: O(n).
 */

reorderSpaces("  this   is  a sentence ")