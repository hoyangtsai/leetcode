/*
 * @lc app=leetcode id=832 lang=javascript
 *
 * [832] Flipping an Image
 */

// @lc code=start
/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
  const n = image.length;

  for (const row of image) {
    for (let i = 0; i * 2 < n; i++) {
      if (row[i] == row[n - i - 1]) {
        row[i] = row[n - i - 1] ^= 1;
      }
    }
  }

  return image;
};
// @lc code=end



flipAndInvertImage([[1, 1, 0], [1, 0, 1], [0, 0, 0]])