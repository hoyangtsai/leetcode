/*
 * @lc app=leetcode id=443 lang=javascript
 *
 * [443] String Compression
 */

/**
 * @Nvidia
 * tags: #string-encode
 */

// @lc code=start
/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
  let i = 0, res = 0;
  while (i < chars.length) {
    let groupLength = 1;
    while (i + groupLength < chars.length && chars[i + groupLength] == chars[i]) {
      groupLength++;
    }
    chars[res++] = chars[i];
    if (groupLength > 1) {
      for (const c of groupLength.toString()) {
        chars[res++] = c;
      }
    }
    i += groupLength;
  }
  return res;
};
// @lc code=end


/**
 * - Time complexity: O(n).
 * - Space complexity: O(1).
 */