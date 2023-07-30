/*
 * @lc app=leetcode id=1870 lang=javascript
 *
 * [1870] Minimum Speed to Arrive on Time
 */

/**
 * tags: #binary-search
 * {@link 875.koko-eating-bananas.js}
 * {@link 1011.capacity-to-ship-packages-within-d-days.js}
 */

// @lc code=start
/**
 * @param {number[]} dist
 * @param {number} hour
 * @return {number}
 */
var minSpeedOnTime = function(dist, hour) {
  if (dist.length - 1 >= hour) return -1;

  const getTimeRequired = (dist, speed) => {
    let time = 0;
    for (let i = 0; i < dist.length; i++) {
      let t = dist[i] / speed;
      // If it's the last one doesn't need to wait for an integer hour
      time += (i == dist.length - 1) ? t : Math.ceil(t);
    }
    return time;
  }

  let l = 1;
  let r = 1e7;
  let minSpeed = -1;

  while (l <= r) {
    let mid = parseInt((l + r) / 2);

    if (getTimeRequired(dist, mid) <= hour) {
      minSpeed = mid;
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  return minSpeed;
};
// @lc code=end


/**
 * - Time complexity: O(N log K)
 * - Space complexity: O(1)
 */