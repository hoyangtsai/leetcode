/*
 * @lc app=leetcode id=131 lang=javascript
 *
 * [131] Palindrome Partitioning
 */

/**
 * 
 * tags: #backtracking, #palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
  let results = [];

  function backtrack(arr, start) {
    if (start == s.length) {
      results.push(arr.slice());
      return;
    }

    for (let i = start; i < s.length; i++) {
      if (isPalindrome(s, start, i)) {
        arr.push(s.substring(start, i + 1));
        backtrack(arr, i + 1);
        arr.pop();
      }
    }
  }

  function isPalindrome(s, lo, hi){
    while (lo < hi) {
      if (s.charAt(lo++) != s.charAt(hi--)) return false;
    }
    return true;
  }

  backtrack([], 0);

  return results;
};
// @lc code=end

