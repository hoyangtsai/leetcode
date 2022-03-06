/*
 * @lc app=leetcode id=22 lang=javascript
 *
 * [22] Generate Parentheses
 */

/**
 * tags: #backtracking, #string-comb
 * {@link permute|./46.permutations.js}
 */

// https://leetcode-cn.com/problems/generate-parentheses/solution/hui-su-suan-fa-by-liweiwei1419/

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  function generate(res, str, left, right) {
    if (str.length == n * 2) {
      res.push(str);
      return;
    }

    if (left < right) {
      return;
    }

    if (left < n) {
      generate(res, str + '(', left + 1, right);
    }

    if (right < n) {
      generate(res, str + ')', left, right + 1);
    }
  }

  let res = [];

  generate(res, '', 0, 0);

  return res;
};
// @lc code=end


/**
 * Backtracking
 * 
 * - Time complexity: O(4^n/√4). Each valid sequence has at most n steps during the backtracking procedure.
 * - Space complexity: O(4^n/√4).
 */