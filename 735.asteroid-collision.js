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
  let stack = [];

  for (const ast of asteroids) {
    let destroyed = false;
    while (stack.length > 0 && // check has asteroids
        ast < 0 && // current one is negative direction
        stack[stack.length - 1] > 0 && // last one is positive direction (different direction)
        !destroyed
    ) {
      // current negative ast is smaller or equal than the last positive ast then destroyed (will stop the while loop)
      if (Math.abs(ast) <= stack[stack.length - 1]) {
        destroyed = true;
      }
      // the last positive ast is smaller or equal than current negative ast pop out
      // and continue challenge the next one from the last
      if (Math.abs(ast) >= stack[stack.length - 1]) {
        stack.pop();
      }
    }
    if (!destroyed) stack.push(ast);
  }

  return stack;
};
// @lc code=end


/**
 * - Time complexity: O(N)
 * - Space complexity: O(N)
 */