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
    
    // re-assemble the word, i.e. "abcd"->"abc"->"abd"->"acd"->"bcd"
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


/**
 * - Time complexity: O(N * (logN + L^2)).
 *   Sorting a list of size N takes O(N log N) time.
 *   Next we use two for loops in which the outer loop runs for O(N) iterations and the inner loop runs for O(L^2) iterations in the worst case scenario.
 *   The first L is for the inner loop and the second L is for creating each preprocessor. Thus the overall time complexity is O(N logN + (N + L^2)) which equals O(N * (LogN + L^2)).
 * - Space complexity: O(N).
 */
