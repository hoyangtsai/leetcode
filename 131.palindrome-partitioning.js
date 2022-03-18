/*
 * @lc app=leetcode id=131 lang=javascript
 *
 * [131] Palindrome Partitioning
 */

/**
 * tags: #backtracking, #palindrome, #string-group-possibility
 * {@link numDecodings|./91.decode-ways.js}
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


/**
 * - Time complexity: O(N * 2^N).
 *   Example, if s = "aaa", N = 3, Total nodes = 2^N = 2^3 = 8
 *   Hence, there could be 2^N possible substring in the worst case. For each substring, it takes O(N) time to generate substring and determine if a palindrome or not. This gives us time complexity as O(N * 2^N).
 * 
 * - Space complexity: O(N).
 */