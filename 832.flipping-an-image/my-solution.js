/*
 * @lc app=leetcode id=832 lang=javascript
 *
 * [832] Flipping an Image
 */

/**
 * tags: #square-grid, #flip-binary, #reflect-flip
 * {@link 48.rotate-image/reverse-diagonal-then-reverse-left-to-right.js}
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
    for (let j = 0; j < n / 2; j++) {
      [image[i][j], image[i][n - j - 1]] = [image[i][n - j - 1], image[i][j]];
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


/**
 * - Time complexity: O(m * n).
 * - Space complexity: O(1).
 */