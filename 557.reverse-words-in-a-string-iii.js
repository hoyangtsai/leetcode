/*
 * @lc app=leetcode id=557 lang=javascript
 *
 * [557] Reverse Words in a String III
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  // let words = s.split(' ');

  // let ans = [];
  // for (const w of words) {
  //   let chars = w.split('');
  //   ans.push(chars.reverse().join(''));
  // }

  let ans = s.split(' ').map(word => word.split('').reverse().join(''))
  return ans.join(' ');
};
// @lc code=end


/**
 * - Time complexity: O(N)
 * - Space complexity: O(1)
 */