/*
 * @lc app=leetcode id=118 lang=javascript
 *
 * [118] Pascal's Triangle
 */

/**
 * tags: #dynamic-programming
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  let triangle = [];

  // Base case; first row is always [1].
  triangle.push([1]);

  for (let rowNum = 1; rowNum < numRows; rowNum++) {
    // The first row element is always 1.
    let row = [1];
    let prevRow = triangle[rowNum - 1];

    // Each triangle element (other than the first and last of each row)
    // is equal to the sum of the elements above-and-to-the-left and
    // above-and-to-the-right.
    for (let j = 1; j < rowNum; j++) {
      row.push(prevRow[j - 1] + prevRow[j]);
    }

    row.push(1);

    triangle.push(row);
  }

  return triangle;
};
// @lc code=end


/**
 * - Time complexity: O(numRows^2)
 * - Space complexity: O(1)
 *   While O(numRows^2) space is used to store the output, the input and output generally do not count towards the space complexity.
 */