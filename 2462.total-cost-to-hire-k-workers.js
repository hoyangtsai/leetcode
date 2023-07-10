/*
 * @lc app=leetcode id=2462 lang=javascript
 *
 * [2462] Total Cost to Hire K Workers
 */

/**
 * tags: #priority-queue
 */

// @lc code=start
const { PriorityQueue } = require('@datastructures-js/priority-queue')
/**
 * @param {number[]} costs
 * @param {number} k
 * @param {number} candidates
 * @return {number}
 */
var totalCost = function(costs, k, candidates) {
  let pq = new PriorityQueue({ compare: (a, b) => {
    if (a[0] == b[0]) {
      return a[1] - b[1];
    }
    return a[0] - b[0];
  }});

  // headWorkers stores the first k workers.
  // tailWorkers stores at most last k workers without any workers from the first k workers.
  for (let i = 0; i < candidates; i++) {
    pq.enqueue([costs[i], 0]);
  }
  for (let i = Math.max(candidates, costs.length - candidates); i < costs.length; i++) {
    pq.enqueue([costs[i], 1]);
  }

  let answer = 0;
  let nextHead = candidates;
  let nextTail = costs.length - 1 - candidates;

  for (let i = 0; i < k; i++) {
    const curWorker = pq.dequeue();
    let curCost = curWorker[0], curSectionId = curWorker[1];
    answer += curCost;

    // Only refill pq if there are workers outside.
    if (nextHead <= nextTail) {
      if (curSectionId == 0) {
        pq.enqueue([costs[nextHead], 0]);
        nextHead++;
      } else {
        pq.enqueue([costs[nextTail], 1]);
        nextTail--;
      }
    }
  }

  return answer;
};
// @lc code=end


/**
 * - Time complexity: O((k + m) * log m)
 *   - We need to initialize one priority queue `pq` of size up 2 * m, which takes O(m * log m) time
 *   - During `k` hiring rounds, we keep popping top element from `pq` and pushing new elements into `pq` for up to k times.
 *     Operation on a priority queue take amortized O(log m) time. Thus this process takes O(k * log m) time. 
 * - Space complexity: O(m)
 */


console.log(totalCost([17,12,10,2,7,2,11,20,8], 3, 4))