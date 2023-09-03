/*
 * @lc app=leetcode id=767 lang=javascript
 *
 * [767] Reorganize String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function(s) {
  let charCounts = {};
  for (const c of s) {
    charCounts[c] = (charCounts[c] || 0) + 1;
  }

  let maxCount = 0, letter = '';
  for (const [char, count] of Object.entries(charCounts)) {
    if (count > maxCount) {
      maxCount = count;
      letter = char;
    }
  }

  // not much room for the max count character
  if (maxCount > parseInt((s.length + 1)/ 2)) {
    return '';
  }

  let ans = Array(s.length).fill('');
  let index = 0;
  // Place the most frequent letter
  while (charCounts[letter] != 0) {
    ans[index] += letter;
    index += 2;
    charCounts[letter]--;
  }

  for (const char in charCounts) {
    while (charCounts[char] > 0) {
      if (index >= s.length) {
        index = 1; // start from even
      }
      ans[index] = char;
      index += 2;
      charCounts[char]--;
    }
  }

  return ans.join('');
};
// @lc code=end


/**
 * - Time complexity: O(N)
 * - Space complexity: O(k)
 */