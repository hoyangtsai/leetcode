/*
 * @lc app=leetcode id=344 lang=javascript
 *
 * [344] Reverse String
 */

// #two-pointers, #string
// @apple, @microsoft, @amazon, @paypal, @rakuten

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  for (let i = 0, j = s.length - 1; i < j; i++, j--) {
    [s[i], s[j]] = [s[j], s[i]];
  }
};
// @lc code=end

/**
 * Two pointers, iteration
 * Time complexity: O(n).
 * Space complexity: O(1).
 */