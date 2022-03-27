/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }

    let strX = String(x);
    let i = 0, j = strX.length - 1;
    while (i <= j) {
      if (strX[i++] != strX[j--]) return false;
    }

    return true;
};
// @lc code=end

