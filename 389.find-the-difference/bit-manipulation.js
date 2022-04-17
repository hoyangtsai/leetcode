/*
 * @lc app=leetcode id=389 lang=javascript
 *
 * [389] Find the Difference
 */

/**
 * tags: #bit-manipulation, #bitwise-operation
 * {@link 136.single-number/bit-manipulation.js}
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  // Initialize ch with 0, because 0 ^ X = X
  // 0 when XORed with any bit would not change the bits value.
  let ch = 0;

  // XOR all the characters of both s and t.
  for (let i = 0; i < s.length; i++) {
    ch ^= s.charCodeAt(i);
  }
  for (let i = 0; i < t.length; i++) {
    ch ^= t.charCodeAt(i);
  }

  return String.fromCharCode(ch);
};
// @lc code=end


/**
 * - Time complexity: O(N), where N is the length of strings. Since, we iterate through both strings once.
 * - Space complexity: O(1).
 */