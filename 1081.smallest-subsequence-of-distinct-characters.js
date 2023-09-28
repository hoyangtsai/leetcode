/*
 * @lc app=leetcode id=1081 lang=javascript
 *
 * [1081] Smallest Subsequence of Distinct Characters
 */

/**
 * tags: #stack, #lexicographical-order
 * {@link 316.remove-duplicate-letters.js}
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var smallestSubsequence = function(s) {
  let stack = [];
  let seen = new Set();

  // keep tracking each letter last occurrence index
  let lastOccurrence = new Map();
  for (let i = 0; i < s.length; i++) {
    lastOccurrence.set(s.charAt(i), i);
  } 

  for (let i = 0; i < s.length; i++) {
    const c = s.charAt(i);

    if (!seen.has(c)) {
      while (stack.length > 0 &&
        stack[stack.length - 1].localeCompare(c) > 0 && // last letter alphabetic order greater than current character
        lastOccurrence.get(stack[stack.length - 1]) > i // more the same letter backward
        ) {
        seen.delete(stack.pop());
      }
      seen.add(c);
      stack.push(c);
    }
  }

  return stack.join('');
};
// @lc code=end


/**
 * - Time complexity: O(N)
 * - Space complexity: O(1)
 */