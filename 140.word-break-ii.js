/*
 * @lc app=leetcode id=140 lang=javascript
 *
 * [140] Word Break II
 */

// @facebook, @amazon, @bloomberg
// #backtracking, #memoization

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
  const wordDictSet = new Set(wordDict);
  const memo = {};

  function search(str) {
    if (memo[str]) return memo[str];
    if (str.length === 0) return [];

    const result = [];

    for (const word of wordDictSet) {
      if (!str.startsWith(word)) {
        continue;
      }

      // last word in the str
      if (word.length === str.length) {
        result.push(word);
      } else {
        const restStr = str.substring(word.length);
        const restRes = search(restStr);
        restRes.forEach(rest => {
          const str = word + ' ' + rest;
          result.push(str);
        });
      }
    }

    memo[str] = result;
    return result;
  }

  return search(s);
};
// @lc code=end

