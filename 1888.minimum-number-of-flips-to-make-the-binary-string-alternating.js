/*
 * @lc app=leetcode id=1888 lang=javascript
 *
 * [1888] Minimum Number of Flips to Make the Binary String Alternating
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minFlips = function(s) {
  function getFlipCount(str, expected) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] != expected) count++;
      expected = expected == '0' ? '1' : '0';
    }
    return count;
  }

  return Math.min(getFlipCount(s, '0'), getFlipCount(s, '1'));
};
// @lc code=end


const ans = minFlips("01001001101") // 2
console.log('ans :>> ', ans);