/*
 * @lc app=leetcode id=735 lang=javascript
 *
 * [735] Asteroid Collision
 */

// @google, @amazon
// #array, #stack
// #top-google-questions

// @lc code=start
/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
  let res = [];

  for (const ast of asteroids) {
    let destroyed = false;
    while (res.length && res[res.length - 1] > 0 && ast < 0 && !destroyed) {
      // current negative ast destroyed if less than last positive ast
      if (res[res.length - 1] >= -ast) destroyed = true;
      // the last of positive ast smaller than current negative ast pop out
      // and continue challenge the next one from the last
      if (res[res.length - 1] <= -ast) res.pop();
    }
    if (!destroyed) res.push(ast);
  }

  return res;
};
// @lc code=end


/**
 * Stack
 * 
 * - Time complexity: O(N).
 * - Space complexity: O(N).
 */