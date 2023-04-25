/*
 * @lc app=leetcode id=1046 lang=javascript
 *
 * [1046] Last Stone Weight
 */

/**
 * tags: #heap, #priority-queue
 */

// @lc code=start
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
  // descending sort
  stones.sort((a, b) => b - a);

  while(stones.length > 1) {
    let stone1 = stones.shift();
    let stone2 = stones.shift();
    if (stone1 != stone2) {
      stones.push(stone1 - stone2);
    }
    // always the largest in the front
    stones.sort((a, b) => b - a);
  }

  return stones.length === 0 ? 0 : stones.shift();
};
// @lc code=end


/**
 * - Time complexity: O(N log N).
 * 
 * - Space complexity: O(N). 
 *   In Java/Javascript though, it's O(N) to create the priority queue.
 */
