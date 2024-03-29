/*
 * @lc app=leetcode id=279 lang=javascript
 *
 * [279] Perfect Squares
 */

/**
 * tags: #breadth-first-search
 * {@link 367.valid-perfect-square.js}
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  let squareNums = [];
  for (let i = 1; i <= n / 2; i++) {
    squareNums.push(i * i);
  }

  let queue = [n];
  let level = 0; // layer
  while(queue.length > 0) {
    level += 1;
    let nextQueue = [];

    for (const remainder of queue) {
      for (const square of squareNums) {
        if (square == remainder) {
          return level;
        } else if (square > remainder) {
          break;
        } else {
          nextQueue.push(remainder - square);
        }
      }
    }
    
    queue = nextQueue;
  }
  return level;
};
// @lc code=end


/**
 * - Time complexity: O(sqrt(n^k+1) - 1 / sqrt(n) - 1) = O(n^h/2) where h is the height of N-ary tree.
 *   
 * - Space complexity: O(sqrt(n)^h), which is also the maximal number of nodes that can appear at the level h.
 */

console.log(numSquares(12));
