/*
 * @lc app=leetcode id=1197 lang=javascript
 *
 * [1197] Minimum Knight Moves
 */

/**
 * @Nvidia
 * tags: #minimum-move. #matrix-move
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var minKnightMoves = function(x, y) {
  let memo = new Map();
  function dfs(x, y) {
    let key = `${x},${y}`;
    if (memo.has(key)) {
      return memo.get(key);
    }

    if (x + y == 0) {
      return 0;
    } else if (x + y == 2) {
      return 2;
    } else {
      let ret =
        Math.min(
          dfs(Math.abs(x - 1), Math.abs(y - 2)),
          dfs(Math.abs(x - 2), Math.abs(y - 1))
        ) + 1;
      memo.set(key, ret);
      return ret;
    }
  }

  return dfs(Math.abs(x), Math.abs(y));
};
// @lc code=end


/**
 * - Time complexity: O(|x * y|)
 * - Space complexity: O(|x * y|)
 */