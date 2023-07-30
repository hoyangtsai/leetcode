/*
 * @lc app=leetcode id=290 lang=javascript
 *
 * [290] Word Pattern
 */

/**
 * tags: #hash-table, #two-string-calculation
 * {@link 205.isomorphic-strings.js}
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
  let words = s.split(' ');

  if (pattern.length !== words.length) return false;

  let dict = {};
  for (let i = 0; i < words.length; i++) {
    const c = pattern.charAt(i);
    const w = words[i];

    // if (!dict.has('c-' + c)) {
    //   dict.set('c-' + c, i);
    // }

    // if (!dict.has('w-' + w)) {
    //   dict.set('w-' + w, i);
    // }

    // if (dict.get('c-' + c) !== dict.get('w-' + w)) return false;

    if (dict['c-' + c] == null) {
      dict['c-' + c] = i;
    }
    if (dict['w-' + w] == null) {
      dict['w-' + w] = i;
    }

    if (dict['c-' + c] !== dict['w-' + w]) return false;
  }

  return true;
};
// @lc code=end


/**
 * - Time complexity: O(N)
 * - Space complexity: O(N)
 */


// console.log(wordPattern("abba", "dog dog dog dog")); // false
console.log(wordPattern("abba", "dog cat cat fish")); // false
// console.log(wordPattern("abc", "b c a")); // true