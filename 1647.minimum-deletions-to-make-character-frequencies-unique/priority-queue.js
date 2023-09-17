/*
 * @lc app=leetcode id=1647 lang=javascript
 *
 * [1647] Minimum Deletions to Make Character Frequencies Unique
 */

/**
 * tags: #priority-queue
 */

const { MaxPriorityQueue } = require('@datastructures-js/priority-queue')
// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function(s) {
  let frequency = Array(26).fill(0);
  for (const c of s) {
    frequency[c.charCodeAt() - 'a'.charCodeAt()]++;
  }
  
  let maxPQ = new MaxPriorityQueue();
  for (let i = 0; i < 26; i++) {
    if (frequency[i] > 0) {
      // adding counts of the characters 
      maxPQ.enqueue(frequency[i]);
    }
  }

  let deleteCount = 0;
  while (!maxPQ.isEmpty()) {
    const topElement = maxPQ.dequeue().element;

    // If the top two elements in the priority queue are the same
    if (topElement == maxPQ.front()?.element) {
      // Decrement the popped value and push it back into the queue
      if (topElement - 1 > 0) {
        maxPQ.enqueue(topElement - 1);
      }
      deleteCount++;
    }
  }

  return deleteCount;
};
// @lc code=end


/**
 * - Time complexity: O(N + K^2 log K)
 * - Space complexity: O(K)
 */
