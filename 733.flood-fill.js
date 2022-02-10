/*
 * @lc app=leetcode id=733 lang=javascript
 *
 * [733] Flood Fill
 */

/**
 * tags: #depth-first-search
 * {@link numIslands|./200.number-of-islands}
 */

// similar: https://medium.com/@obiwankenoobi/interview-question-9-paint-bucket-22b54d4b75df

// @lc code=start
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
  function dfs(image, r, c, color, newColor) {
    if (image[r][c] == color) {
      image[r][c] = newColor;
      if (r >= 1) dfs(image, r - 1, c, color, newColor);
      if (c >= 1) dfs(image, r, c - 1, color, newColor);
      if (r + 1 < image.length) dfs(image, r + 1, c, color, newColor);
      if (c + 1 < image[0].length) dfs(image, r, c + 1, color, newColor);
    }
  }

  const color = image[sr][sc];
  if (color != newColor) dfs(image, sr, sc, color, newColor);
  return image;
};
// @lc code=end


/**
 * - Time complexity: O(N).
 * - Space complexity: O(N).
 */