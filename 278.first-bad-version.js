/*
 * @lc app=leetcode id=278 lang=javascript
 *
 * [278] First Bad Version
 */

 // @facebook
 // #binary-search

// @lc code=start
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
    let left = 1;
    let right = n;

    while (left < right) {
      let mid = parseInt((left + right) / 2);
      if (!isBadVersion(mid)) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    return left;
  };
};
// @lc code=end


/**
 * Binary search
 * 
 * Time complexity: O(log n). The search space is halved each time.
 * Space complexity: O(1).
 */