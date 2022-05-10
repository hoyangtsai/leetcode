/*
 * @lc app=leetcode id=139 lang=javascript
 *
 * [139] Word Break
 */

/**
 * tags: #breadth-first-search, #string-combination
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const wordDictSet = new Set(wordDict);
  const queue = [0];
  const visited = new Array(s.length).fill(false);

  while (queue.length) {
    let start = queue.shift();
    if (visited[start]) { // the index of s been reserved
      continue;
    }
    for (let end = start + 1; end <= s.length; end++) {
      if (wordDictSet.has(s.substring(start, end))) {
        queue.push(end);
        if (end === s.length) {
          return true;
        }
      }
    }
    visited[start] = true;
  }

  return false;
};
// @lc code=end


/**
 * - Time complexity: O(n^3). 
 *   For every starting index, the search can continue till the end of the given string.
 * 
 * - Space complexity: O(n).
 */
