/*
 * @lc app=leetcode id=119 lang=javascript
 *
 * [119] Pascal's Triangle II
 */

/**
 * tags: #dynamic-programming
 * {@link 118.pascals-triangle.js}
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  let triangle = [];

  triangle.push([1]);

  for (let rowNum = 1; rowNum <= rowIndex; rowNum++) {
    let row = [1];
    let prevRow = triangle[rowNum - 1];
    
    for (let j = 1; j < rowNum; j++) {
      row.push(prevRow[j - 1] + prevRow[j]);
    }

    row.push(1);

    triangle.push(row);
  }

  return triangle[rowIndex];
};
// @lc code=end


/**
 * - Time complexity: O(rowIndex^2)
 * - Space complexity: O(rowIndex)
 */