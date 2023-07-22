/*
 * @lc app=leetcode id=688 lang=javascript
 *
 * [688] Knight Probability in Chessboard
 */

/**
 * tags: #dynamic-programming, #probability, #direction-gird, #square-traverse
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @param {number} row
 * @param {number} column
 * @return {number}
 */
var knightProbability = function(n, k, row, column) {
  // Define possible directions for the knight's moves
  const dirs = [
    [1, 2], [1, -2], [-1, 2], [-1, -2],
    [2, 1], [2, -1], [-2, 1], [-2, -1]
  ];

  // Initialize the previous and current DP tables
  let prevDp = Array.from(Array(n).fill(0), () => Array(n).fill(0));
  let currDp = Array.from(Array(n).fill(0), () => Array(n).fill(0));

  // Set the probability of the starting cell to 1
  prevDp[row][column] = 1;

  // Iterate over the number of moves
  for (let moves = 1; moves <= k; moves++) {
    // Iterate over the cells on the chessboard
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        currDp[i][j] = 0;

        // Iterate over possible directions
        for (const dir of dirs) {
          let prevI = i - dir[0];
          let prevJ = j - dir[1];

          // Check if the previous cell is within the chessboard
          if (prevI >= 0 && prevI < n && prevJ >= 0 && prevJ < n) {
            // Update the probability by adding the previous probability divided by 8
            currDp[i][j] += prevDp[prevI][prevJ] / 8;
          }
        }
      }
    }
     // Swap the previous and current DP tables
     let temp = prevDp;
     prevDp = currDp;
     currDp = temp;
  }

  // Calculate the total probability by summing up the probabilities for all cells
  let totalProbability = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      totalProbability += prevDp[i][j];
    }
  }

  // Return the total probability
  return totalProbability;
};
// @lc code=end


/**
 * - Time complexity: O(k * n^2)
 * - Space complexity: O(n^2)
 */