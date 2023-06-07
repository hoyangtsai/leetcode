/*
 * @lc app=leetcode id=849 lang=javascript
 *
 * [849] Maximize Distance to Closest Person
 */

/**
 * tags: #two-pointer, #maximum-distance-to-closest
 * #google-interview
 */

// @lc code=start
/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function(seats) {
  let ans = 0;
  let prev = -1, next = 0;
  const N = seats.length;
  for (let i = 0; i < N; i++) {
    // current index is seated, just update prev pointer
    if (seats[i] == 1) {
      prev = i;
    } else { // current index is vacant
      // update another pointer to current index + 1
      while (next < N && seats[next] == 0 || next < i) {
        next ++;
      }

      // get left side between last vacant and current
      let left = prev == -1 ? N : i - prev;
      // get right side between end and current
      let right = next == N ? N : next - i;
      ans = Math.max(ans, Math.min(left, right));
    }
  }

  return ans;
};
// @lc code=end


/**
 * - Time complexity: O(N), where N is the length of seats
 * - Space complexity: O(1)
 */

// const res = maxDistToClosest([1, 0, 0, 0, 0, 1]);
const res = maxDistToClosest([1, 0, 0, 0]);
console.log('res =>', res);
