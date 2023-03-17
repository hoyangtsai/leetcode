/*
 * @lc app=leetcode id=875 lang=javascript
 *
 * [875] Koko Eating Bananas
 */

// @google, @facebook
// #binary-search, #top-google-questions
// {@link 1011.capacity-to-ship-packages-within-d-days.js}

// @lc code=start
/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
  const getSpeed = (speed) => {
    let time = 0;
    for (let p of piles) {
      time += Math.ceil(p / speed);
    }
    return time;
  }

  let l = 1;
  let r = Math.max(...piles);

  while (l < r) {
    const m = parseInt((l + r) / 2);
    if (getSpeed(m) <= h) {
      r = m;
    } else {
      l = m + 1;
    }
  }

  return l;
};
// @lc code=end


/**
 * - Time complexity: O(n * log m).
 * - Space complexity: O(1).
 */