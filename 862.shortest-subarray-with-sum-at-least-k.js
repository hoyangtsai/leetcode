/*
 * @lc app=leetcode id=862 lang=javascript
 *
 * [862] Shortest Subarray with Sum at Least K
 */

/**
 * @Nvidia
 * tags: #sliding-window
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var shortestSubarray = function(nums, k) {  
  const N = nums.length;
  let P = Array(N + 1).fill(0);
  for (let i = 0; i < N; ++i) {
    P[i + 1] = P[i] + nums[i];
  }

  // Want smallest y-x with P[y] - P[x] >= K
  let ans = N + 1; // N+1 is impossible
  let monoq = []; //opt(y) candidates, as indices of P

  for (let y = 0; y < P.length; ++y) {
    // Want opt(y) = largest x with P[x] <= P[y] - K;
    while (monoq.length > 0 && P[y] <= P[monoq[monoq.length - 1]])
      monoq.pop();
    while (monoq.length > 0 && P[y] >= P[monoq[0]] + k)
      ans = Math.min(ans, y - monoq.shift());

    monoq.push(y);
  }

  return ans < N + 1 ? ans : -1;
};
// @lc code=end


/**
 * - Time complexity: O(N).
 * - Space complexity: O(N)
 */