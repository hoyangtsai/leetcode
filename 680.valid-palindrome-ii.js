/*
 * @lc app=leetcode id=680 lang=javascript
 *
 * [680] Valid Palindrome II
 */

// @facebook, @google, @amazon, @apple
// #string, #two-pointers

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  const isPalindrome = (s) => s === s.split('').reverse().join('');

  const cut = (s, i) => s.substring(0, i) + s.substring(i + 1);

  for (let i = 0, end = s.length / 2; i < end; i++) {
    let j = s.length - 1 - i;
    if (s[i] !== s[j]) {
      return isPalindrome(cut(s, i)) || isPalindrome(cut(s, j));
    }
  }
  return true;
};
// @lc code=end

console.log(validPalindrome("decdadccbaabtccdadced"));