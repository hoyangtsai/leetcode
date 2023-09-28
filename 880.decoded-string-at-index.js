/*
 * @lc app=leetcode id=880 lang=javascript
 *
 * [880] Decoded String at Index
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var decodeAtIndex = function(s, k) {
  let size = 0;
  let i = 0;

  while (size < k) {
    let c = s.charAt(i);
    if (!isNaN(c)) {
      size *= Number(c);
    } else {
      size++;
    }
    i++;
  }

  for (let j = i - 1; j >= 0; j--) {
    let c = s.charAt(j);
    if (!isNaN(c)) {
      size /= Number(c);
      k %= size;
    } else {
      if (k == 0 || k == size) {
        return c;
      }
      size--;
    }
  }

  return '';
};
// @lc code=end


/**
 * - Time complexity: O(N)
 * - Space complexity: O(1)
 */