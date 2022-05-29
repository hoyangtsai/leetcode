/*
 * @lc app=leetcode id=318 lang=javascript
 *
 * [318] Maximum Product of Word Lengths
 */

/**
 * tags: #bit-manipulation, #char-code
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
  function bitNumber(ch) {
    return ch.charCodeAt() - 'a'.charCodeAt();
  }

  let hashmap = new Map();

  let bitmask = 0;
  for (const word of words) {
    bitmask = 0;
    for (const ch of word) {
      // add bit number bitNumber in bitmask
      bitmask |= 1 << bitNumber(ch);
    }
    // there could be different words with the same bitmask
    // ex. ab and aabb
    hashmap.set(bitmask, Math.max(hashmap.get(bitmask) || 0, word.length));
  }

  let maxProd = 0;
  for (const x of hashmap.keys()) {
    for (const y of hashmap.keys()) {
      if ((x & y) == 0) 
        maxProd = Math.max(maxProd, hashmap.get(x) * hashmap.get(y));
    }
  }

  return maxProd;
};
// @lc code=end


/**
 * - Time complexity: O(N^2 + L) where N is a number of words and L is a total length of all words together.
 * - Space complexity: O(N) to keep a hashmap of N elements if N < 2^36. Otherwise, it's O(2^36) = O(1).
 */