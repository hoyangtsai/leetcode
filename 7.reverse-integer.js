/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */

// @adobe, @amazon, @google, @apple
// #math
// #google-interview

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
    // get last int
    let pop = x % 10;
    // rise the unit
    rev = 10 * rev + pop;
    // shrink the input x 10 units each loop
    x = Math.floor(x / 10);
  }
  // @comment another method is convert x to string and traversal backward by string length to conjunct output
  // check after reversed is exceed the number range
  if (rev > posMax || rev < negMax) return 0;
  // if x is negative convert it back
  return isNeg ? rev * -1 : rev;
};
// @lc code=end


/**
 * Pop and Push Digits
 * 
 * - Time complexity: O(log(x)).
 * - Space complexity: O(1).
 */