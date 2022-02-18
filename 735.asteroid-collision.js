/*
 * @lc app=leetcode id=735 lang=javascript
 *
 * [735] Asteroid Collision
 */

/**
 * tags: #stack
 * #top-google-question
 */

// @lc code=start
/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
  let res = [];

  for (const ast of asteroids) {
    let destroyed = false;
    while (res.length > 0 && // has elements
        res[res.length - 1] > 0 && // last one is positive direction (different direction)
        ast < 0 // current one is negative direction
        && !destroyed
    ) {
      // current negative ast destroyed if less than last positive ast
      if (res[res.length - 1] >= Math.abs(ast)) destroyed = true;
      // the last of positive ast smaller than current negative ast pop out
      // and continue challenge the next one from the last
      if (res[res.length - 1] <= Math.abs(ast)) res.pop();
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