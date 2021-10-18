/*
 * @lc app=leetcode id=744 lang=javascript
 *
 * [744] Find Smallest Letter Greater Than Target
 */

// @linkedin
// #binary-search

// @lc code=start
/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
  // base case
  if (letters[0] > target || target >= letters[letters.length - 1]) {
    return letters[0];
  }

  let left = 0, right = letters.length - 1;
  while (left < right) {
    let mid = parseInt((left + right) / 2);
    if (letters[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return letters[left];
};
// @lc code=end


/**
 * Binary search
 * 
 * - Time complexity: O(log N).
 * - Sapce complexity: O(1).
 */