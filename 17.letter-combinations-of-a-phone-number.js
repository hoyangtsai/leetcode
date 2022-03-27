/*
 * @lc app=leetcode id=17 lang=javascript
 *
 * [17] Letter Combinations of a Phone Number
 */

/**
 * tags: #backtracking, #string-combination-possibility
 * {@link 91.decode-ways.js}
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (!digits || digits.length === 0) return [];

  const letters = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };

  const res = [];

  function backtrack(i, s) {
    if (i === digits.length) {
      res.push(s);
      return;
    }
    for (const c of letters[digits[i]]) {
      backtrack(i + 1, s + c);
    }
  }

  backtrack(0, '');
  
  return res;
};
// @lc code=end


/**
 * - Time complexity: O(4^N * N), where N is the length of digits. Note that 4 in this expression is referring to the maximum value length in the hash map.
 * - Space complexity: O(N).
 */

letterCombinations('23');