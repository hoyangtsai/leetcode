/*
 * @lc app=leetcode id=247 lang=javascript
 *
 * [247] Strobogrammatic Number II
 */

// @facebook
// #array, #string, #recursion
// #google-interview

// https://leetcode.com/problems/strobogrammatic-number-ii/discuss/67275/Python-recursive-solution-need-some-observation-so-far-97

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var findStrobogrammatic = function(n) {
  let res = [];

  const evenMidCandidate = ['11', '69', '88', '96', '00'];
  const oddMidCandidate = ['0', '1', '8'];

  let middle = [];
  let base = [];
  if (n == 1) {
    return oddMidCandidate;
  }
  if (n == 2) {
    return evenMidCandidate.slice(0, -1);
  }
  // odd
  if (n % 2) {
    base = findStrobogrammatic(n - 1);
    middle = oddMidCandidate;
  } else { //even
    base = findStrobogrammatic(n - 2);
    middle = evenMidCandidate;
  }

  let half = parseInt((n - 1) / 2);
  for (const b of base) {
    for (const m of middle) {
      res.push(b.substring(0, half) + m + b.substring(half));
    }
  }
  return res;
};
// @lc code=end

