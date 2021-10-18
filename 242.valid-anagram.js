/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @bloomberg, @amazon, @facebook
// #string, #sorting
// #google-interview

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length != t.length) return false;
  const str1 = s.split('').sort();
  const str2 = t.split('').sort();
  return str1.join() === str2.join();
};
// @lc code=end

