/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let n = a.length, m = b.length;
  if (n < m) return addBinary(b, a);

  let L = Math.max(n, m);
  let ans = '';

  let carry = 0, j = m - 1;
  for (let i = L - 1; i >= 0; i--) {
    if (a.charAt(i) == '1') carry++;
    if (j > - 1 && b.charAt(j--) == '1') carry++;

    if (carry % 2 == 1) ans += '1';
    else ans += '0';

    carry >>= 1;
  }

  if (carry == 1) ans += '1';

  return ans.split('').reverse().join('');
};
// @lc code=end

/**
 * - Time complexity: O(max(N, M)), where N and M are lengths of the input strings a and b.
 * - Space complexity: O(max(N, M)).
 */