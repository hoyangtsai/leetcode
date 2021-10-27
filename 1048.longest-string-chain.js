/*
 * @lc app=leetcode id=1048 lang=javascript
 *
 * [1048] Longest String Chain
 */

// @google
// #hash-table, #dynamic-programming, #string-comb
// #top-google-questions

// @lc code=start
/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function(words) {
  const memo = {};
  
  words.sort((a, b) => a.length - b.length);

  let longestWordLength = 1;
  
  for (const word of words) {

    let presentLength = 1;
    
    // mix up the word, i.e. "abcd"->"abc"->"abd"->"acd"->"bcd"
    for (let i = word.length - 1; i >= 0; i--) {
      const temp = word.substring(0, i) + word.substring(i + 1);
      // get the previous same word length if existed
      let previousLength = memo[temp] || 0;
      presentLength = Math.max(presentLength, previousLength + 1);
    }
    // only store origin word record
    memo[word] = presentLength;

    longestWordLength = Math.max(longestWordLength, presentLength);
  }

  return longestWordLength;
};
// @lc code=end


longestStrChain(["abcd", "dbqca"]);