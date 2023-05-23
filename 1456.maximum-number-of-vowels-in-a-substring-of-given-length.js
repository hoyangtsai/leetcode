/*
 * @lc app=leetcode id=1456 lang=javascript
 *
 * [1456] Maximum Number of Vowels in a Substring of Given Length
 */

/**
 * tags: #sliding-window, #substring
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  // Build the window of size k, count the number of vowels it contains.
  // assume the first k length of string s has the longest vowel counts
  let count = 0;
  for (let i = 0; i < k; i++) {
    count += vowels.includes(s.charAt(i)) ? 1 : 0;
  }

  let ans = count;

  // Slide the window to the right, focus on the added character and the
  // removed character and update "count". Record the largest "count".
  // starting from the size of k, move the i from left to right
  // record the maximum length contains vowel base on the k length
  for (let i = k; i < s.length; i++) {
    count += vowels.includes(s.charAt(i)) ? 1 : 0;
    count -= vowels.includes(s.charAt(i - k)) ? 1 : 0;
    ans = Math.max(ans, count);
  }

  return ans;
};
// @lc code=end


/**
 * - Time complexity: O(n).
 * - Space complexity: O(1).
 */