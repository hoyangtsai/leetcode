/*
 * @lc app=leetcode id=59 lang=javascript
 *
 * [59] Spiral Matrix II
 */

/**
 * tags: #matrix
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  let result = Array.from(Array(n), () => Array(n));
  let cnt = 1;
  for (let layer = 0; layer < (n + 1) / 2; layer++) {
    // direction 1 - traverse from left to right
    for (let ptr = layer; ptr < n - layer; ptr++) {
      result[layer][ptr] = cnt++;
    }
    // direction 2 - traverse from top to bottom
    for (let ptr = layer + 1; ptr < n - layer; ptr++) {
      result[ptr][n - layer - 1] = cnt++;
    }
    // direction 3 - traverse from right to left
    for (let ptr = layer + 1; ptr < n - layer; ptr++) {
      result[n - layer - 1][n - ptr - 1] = cnt++;
    }
    // direction 4 - traverse from bottom to top
    for (let ptr = layer + 1; ptr < n - layer - 1; ptr++) {
      result[n - ptr - 1][layer] = cnt++;
    }
  }
  return result;
};
// @lc code=end


/**
 * Traverse Layer by Layer in Spiral Form
 * We can observe that, for any given n, the total number of layers is given by: [n + 1 / 2] This works for both even and odd n.
 * Example:
 * For n = 3, layer = 2
 * For n = 6, layer = 3
 * 
 * - Time complexity: O(n^2)
 * - Space complexity: O(1). We use constant extra space for storing `cnt`.
 */