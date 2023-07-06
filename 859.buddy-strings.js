/*
 * @lc app=leetcode id=859 lang=javascript
 *
 * [859] Buddy Strings
 */

/**
 * tags: #string-compare, #char-code
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function(s, goal) {
  if (s.length != goal.length) return false;

  if (s === goal) {
    // If we have 2 same characters in string 's',
    // we can swap them and still the strings will remain equal.
    let frequency = Array(26).fill(0);

    for (const ch of s) {
      frequency[ch.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
      if (frequency[ch.charCodeAt(0) - 'a'.charCodeAt(0)] == 2) {
        return true;
      }
    }

    // Otherwise, if we swap any two characters, it will make the strings unequal.
    return false;
  }

  let firstIndex = -1, secondIndex = -1;
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) != goal.charAt(i)) {
      if (firstIndex === -1) {
        firstIndex = i;
      } else if (secondIndex === -1) {
        secondIndex = i
      } else {
        // We have at least 3 indices with different characters,
        // thus, we can never make the strings equal with only one swap.
        return false;
      }
    }
  }

  // We can't swap if the character at only one index is different.
  if (secondIndex === -1) {
    return false;
  }

  // All characters of both strings are the same except two indices.
  return s.charAt(firstIndex) == goal.charAt(secondIndex) && 
        s.charAt(secondIndex) == goal.charAt(firstIndex);
};
// @lc code=end


/**
 * - Time complexity: O(n)
 * - Space complexity: O(1)
 */