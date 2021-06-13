/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// #math, #palindromic, #anagram
// @adobe, @bloomberg, @google, @microsoft, @amazon, @yahoo, @apple

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }
    let revertedNumber = 0;
    while (x > revertedNumber) {
        // carry the last digit and get the last digit from x
        revertedNumber = (revertedNumber * 10) + (x % 10);
        // chop off the last digit
        x = Number.parseInt(x / 10, 10);
    }

    return x == revertedNumber || x == Number.parseInt(revertedNumber/10, 10);
};
// @lc code=end

