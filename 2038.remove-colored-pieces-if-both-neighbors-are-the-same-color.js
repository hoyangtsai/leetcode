/*
 * @lc app=leetcode id=2038 lang=javascript
 *
 * [2038] Remove Colored Pieces if Both Neighbors are the Same Color
 */

/**
 * tags: #game-theory, #greedy
 */

// @lc code=start
/**
 * @param {string} colors
 * @return {boolean}
 */
var winnerOfGame = function(colors) {
  let alice = 0, bob = 0;

  for (let i = 1; i < colors.length; i++) {
    if (colors.charAt(i - 1) == colors.charAt(i) &&
      colors.charAt(i) == colors.charAt(i + 1)) {
        if (colors.charAt(i) == 'A') {
          alice++;
        } else {
          bob++;
        }
    }
  }

  return alice - bob >= 1;
};
// @lc code=end


/**
 * - Time complexity: O(n)
 * - Space complexity: O(1)
 */