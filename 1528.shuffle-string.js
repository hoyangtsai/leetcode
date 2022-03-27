/*
 * @lc app=leetcode id=1528 lang=javascript
 *
 * [1528] Shuffle String
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
  let res = [];
  for (let i = 0; i < indices.length; i++) {
    res[indices[i]] = s.charAt(i);
  }

  return res.join("");
};
// @lc code=end



const s = restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3])
console.log('s :>> ', s);