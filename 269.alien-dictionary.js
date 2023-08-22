/*
 * @lc app=leetcode id=269 lang=javascript
 *
 * [269] Alien Dictionary
 */

/**
 * tags: #kahn-algorithm, #topological-sort
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function(words) {
  // Step 0: Create data structures and find all unique letters.
  let adjList = new Map();
  let counts = new Map();
  for (const word of words) {
    for (const c of word) {
      counts.set(c, 0);
      adjList.set(c, []);
    }
  }

  // Step 1: Find all edges.
  for (let i = 0; i < words.length - 1; i++) {
    let word1 = words[i];
    let word2 = words[i + 1];
    // Check that word2 is not a prefix of word1.
    if (word1.length > word2.length && word1.startsWith(word2)) {
      return "";
    }
    // Find the first non match and insert the corresponding relation.
    for (let j = 0; j < Math.min(word1.length, word2.length); j++) {
      if (word1.charAt(j) != word2.charAt(j)) {
        adjList.get(word1.charAt(j)).push(word2.charAt(j))
        counts.set(word2.charAt(j), counts.get(word2.charAt(j)) + 1);
        break;
      }
    }
  }

  // Step 2: Breadth-first search.
  let queue = [];
  for (const c of counts.keys()) {
    if (counts.get(c) === 0) {
      queue.push(c);
    }
  }

  let ans = '';
  while (queue.length > 0) {
    const c = queue.shift();
    ans += c;
    for (const next of adjList.get(c)) {
      counts.set(next, counts.get(next) - 1);
      if (counts.get(next) === 0) {
        queue.push(next);
      }
    }
  }

  if (ans.length < counts.size) {
    return '';
  }
  return ans;
};
// @lc code=end


/**
 * - Time complexity: O(C)
 * 
 * - Space complexity: O(1) or O(U + min(U^2, N))
 *   So for the question we're given, where U is a constant fixed at a maximum of 26,
 *   the space complexity is simply O(1). This is because U is fixed at 26,
 *   and the number of relation is fixed at 26^2, so O(min(U^2, N)) = O(26^2) = O(1)
 */