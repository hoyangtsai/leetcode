/*
 * @lc app=leetcode id=779 lang=javascript
 *
 * [779] K-th Symbol in Grammar
 */

/**
 * tags: #recursion, #bit-manipulation
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthGrammar = function(n, k) {
  if (n == 1) return 0;

  let totalElements = Math.pow(2, n - 1);
  let halfElements = parseInt(totalElements / 2);

  if (k > halfElements) {
    return 1 - kthGrammar(n, k - halfElements);
  }
  
  return kthGrammar(n - 1, k);
};
// @lc code=end


/**
 * - Time complexity: O(n)
 * - Space complexity: O(n)
 */