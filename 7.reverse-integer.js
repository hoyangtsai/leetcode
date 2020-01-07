/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    // set the threshold of postive and negative number
    let posMax = Math.pow(2, 31) - 1;
    let negMax = -(Math.pow(2, 31));
    // check x is negative
    let isNeg = (x < 0);
    // convert negative number to postive
    x = isNeg ? x * -1 : x;
    let rev = 0;
    while(x > 0){
        let pop = x % 10;
        rev = 10 * rev + pop;
        x = Math.floor(x / 10);
    }
    //@comment another method is convert x to string and traversal backward by string length to conjunct output
    // check after reversed is exceed the number range
    if (rev > posMax || rev < negMax) return 0;
    // if x is negative convert it back
    return isNeg ? rev * -1 : rev;
};
// @lc code=end

