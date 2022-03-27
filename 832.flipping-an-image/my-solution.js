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
  const m = image.length;
  const n = image[0].length;

  // flip
  for (let i = 0; i < m; i++) {
    let j = 0, k = n - 1;
    while (j <= k) {
      [image[i][j], image[i][k]] = [image[i][k], image[i][j]];
      j++;
      k--;
    }
  }

  // invert
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      image[i][j] ^= 1;
    }
  }

  return image;
};
// @lc code=end



flipAndInvertImage([[1, 1, 0], [1, 0, 1], [0, 0, 0]])