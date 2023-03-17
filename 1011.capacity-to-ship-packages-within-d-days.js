/*
 * @lc app=leetcode id=1011 lang=javascript
 *
 * [1011] Capacity To Ship Packages Within D Days
 */

// @facebook, @amazon
// tags: #binary-search
// {@link 875.koko-eating-bananas.js}

// @lc code=start
/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
  // 定義：當運載能力為 x 時，需要 f(x) 天運完所有貨物
  // f(x) 隨著 x 的增加單調遞減
  const getDays = (w) => {
    let days = 0;
    for (let i = 0; i < weights.length; ) {
      // 儘可能多裝貨物
      let cap = w;
      while (i < weights.length) {
        if (cap < weights[i]) {
          break;
        } else {
          cap -= weights[i];
        }
        i++;
      }
      days++;
    }
    return days;
  }

  // 搜索區間 [left, right)
  let left = Math.max(...weights);
  let right = weights.reduce((a, b) => a + b, 1);

  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    if (getDays(mid) <= days) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
};
// @lc code=end


/**
 * - Time complexity: O(n⋅log(500⋅n)) = O(n⋅log(n))
 * - Space complexity: O(1)
 */