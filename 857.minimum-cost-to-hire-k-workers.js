/*
 * @lc app=leetcode id=857 lang=javascript
 *
 * [857] Minimum Cost to Hire K Workers
 */

/**
 * tags: #greedy, #heap(priority-queue)
 * #google-interview
 */

// @lc code=start
/**
 * @param {number[]} quality
 * @param {number[]} wage
 * @param {number} k
 * @return {number}
 */
var mincostToHireWorkers = function(quality, wage, k) {
  let workers = [];
  for (let i = 0; i < quality.length; i++) {
    const ratio = wage[i] / quality[i];
    const worker = {
      ratio: ratio,
      quality: quality[i],
      wage: wage[i],
    };
    workers.push(worker);
  }
  workers.sort((a, b) => a.ratio - b.ratio);

  let minCost = Number.POSITIVE_INFINITY;
  let pool = [];
  let sumq = 0;
  for (const worker of workers) {
    pool.push(-worker.quality);
    sumq += worker.quality;
    if (pool.length > k) {
      sumq += pool.shift();
    }
    if (pool.length == k) {
      minCost = Math.min(minCost, parseFloat(sumq * worker.ratio).toFixed(5));
    }
  }

  return minCost;
};
// @lc code=end


/**
 * - Time complexity: O(N * log N).
 * - Space complexity: O(N).
 */


// const ans = mincostToHireWorkers([3, 1, 10, 10, 1], [4, 8, 2, 2, 7], 3);
const ans2 = mincostToHireWorkers([10, 20, 5], [70, 50, 30], 2);

// const ans3 = mincostToHireWorkers([25, 68, 35, 62, 52, 57, 35, 83, 40, 51], [147, 97, 251, 129, 438, 443, 120, 366, 362, 343], 6);
console.log('ans =>', ans2);