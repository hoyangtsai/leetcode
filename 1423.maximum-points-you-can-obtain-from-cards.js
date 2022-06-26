/*
 * @lc app=leetcode id=1423 lang=javascript
 *
 * [1423] Maximum Points You Can Obtain from Cards
 */

// @lc code=start
/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
  const n = cardPoints.length;

  let frontSetOfCards = Array(k + 1);
  let rearSetOfCards = Array(k + 1);

  // Initialize 0th index in both the arrays
  frontSetOfCards[0] = rearSetOfCards[0] = 0;

  for (let i = 0; i < k; i++) {
    frontSetOfCards[i + 1] = cardPoints[i] + frontSetOfCards[i];
    rearSetOfCards[i + 1] = cardPoints[n - i - 1] + rearSetOfCards[i];
  }

  let maxScore = 0;
  // Each i represents the number of cards we take from the front.
  for (let i = 0; i <= k; i++) {
    let currentScore = frontSetOfCards[i] + rearSetOfCards[k - i];
    maxScore = Math.max(maxScore, currentScore);
  }

  return maxScore;
};
// @lc code=end


/**
 * - Time complexity: O(k).
 * - Space complexity: O(k).
 */