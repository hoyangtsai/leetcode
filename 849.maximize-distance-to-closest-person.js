/*
 * @lc app=leetcode id=849 lang=javascript
 *
 * [849] Maximize Distance to Closest Person
 */

// @yahoo, @google, @amazon, @microsoft
// #array
// #google-interview

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
    if (seats[i] == 1) {
      prev = i;
    } else {
      while (next < N && seats[next] == 0 || next < i) {
        next ++;
      }

      let left = prev == -1 ? N : i - prev;
      let right = next == N ? N : next - i;
      ans = Math.max(ans, Math.min(left, right));
    }
  }

  return ans;
};
// @lc code=end

/**
 * Two pointer
 * Time complexity: O(N), where N is the length of seats
 * Space complexity: O(1)
 */