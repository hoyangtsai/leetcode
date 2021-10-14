/*
 * @lc app=leetcode id=279 lang=javascript
 *
 * [279] Perfect Squares
 */

// @amazon, @google
// #math, #dynamic-programming, #breadth-first-search
// &367

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  let squareNums = [];
  for (let i = 1; i <= n; i++) {
    squareNums.push(i * i);
  }

  let queue = [n];
  let level = 0;
  while(queue.length > 0) {
    level += 1;
    let nextQueue = [];

    for (const remainder of queue) {
      for (const square of squareNums) {
        if (remainder == square) {
          return level;
        } else if (remainder < square) {
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

const l = numSquares(12);
