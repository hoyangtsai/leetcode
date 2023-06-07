/*
 * @lc app=leetcode id=28 lang=javascript
 *
 * [28] Implement strStr()
 */

/**
 * tags: #two-pointers
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (needle.length === 0) return 0;
  if (haystack.length < needle.length) return -1;

  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
    if (haystack[i] === needle[0]) {
      for (let j = 0; j < needle.length; j++) {
        if (needle[j] !== haystack[i + j]) {
          break;
        } else if (j === needle.length - 1) {
          return i;
        }
      }
    }
  }
  return -1;
};
// @lc code=end


// console.log('["hello", "ll"] =>', strStr('hello', 'll'));
// console.log('["mississippi", "issip"] =>', strStr('mississippi', 'issip'));
// console.log('["a", "a"] =>', strStr('a', 'a'));
