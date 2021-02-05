/*
 * @lc app=leetcode id=482 lang=javascript
 *
 * [482] License Key Formatting
 */

// @lc code=start
/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function(S, K) {
  const str = S.replace(/-/g, '').toUpperCase(); // remove all slash
  const arr = str.split('');

  for (let i = arr.length - 1 - K ; i >= 0; i -= K) {
    arr[i] += '-';
  }
  return arr.join('');
};
// @lc code=end

