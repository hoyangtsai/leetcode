/*
 * @lc app=leetcode id=165 lang=javascript
 *
 * [165] Compare Version Numbers
 */

/**
 * tags: #string, #two-pointers, #simulation
 */

// @lc code=start
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
  let i = 0;
  let j = 0;
  const n1 = version1.length;
  const n2 = version2.length;

  while (i < n1 || j < n2) {
    let num1 = 0;
    let num2 = 0;

    while (i < n1 && version1[i] !== '.') {
      num1 = num1 * 10 + parseInt(version1[i]);
      i++;
    }
    while (j < n2 && version2[j] !== '.') {
      num2 = num2 * 10 + parseInt(version2[j]);
      j++;
    }

    if (num1 > num2) {
      return 1;
    } else if (num1 < num2) {
      return -1;
    }

    i++;
    j++;
  }

  return 0;
};
// @lc code=end


/**
 * - Time complexity: O(m + n), where m and n are the lengths of version1 and version2 respectively.
 * - Space complexity: O(1).
 */