/*
 * @lc app=leetcode id=205 lang=javascript
 *
 * [205] Isomorphic Strings
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  let mapDict = {};
  for (let i = 0; i < s.length; i++) {
    if (mapDict['s' + s[i]] == null) {
      mapDict['s' + s[i]] = t[i];
    }
    if (mapDict['t' + t[i]] == null) {
      mapDict['t' + t[i]] = s[i];
    }
    if (s[i] != mapDict['t' + t[i]] || t[i] != mapDict['s' + s[i]]) {
      return false;
    }
  }
  return true;
};
// @lc code=end

/**
 * Character Mapping
 * 
 * - Time complexity: O(N).
 * - Space complexity: O(N).
 */
