/*
 * @lc app=leetcode id=1046 lang=javascript
 *
 * [1046] Last Stone Weight
 */

/**
 * tags: #counting-sort
 * {@link 1200.minimum-absolute-difference/counting-sort.js}
 */

// @lc code=start
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
  // Set up the bucket array
  let maxWeight = stones[0];
  for (const stone of stones) {
    maxWeight = Math.max(maxWeight, stone);
  }

  let buckets = new Array(maxWeight + 1).fill(0);
  // Bucket sort
  for (const weight of stones) {
    buckets[weight]++;
  }

  // Scan through the buckets
  let biggestWeight = 0;
  let currentWeight = maxWeight;
  while (currentWeight > 0) {
    if (buckets[currentWeight] == 0) {
      currentWeight--;
    } else if (biggestWeight == 0) {
      buckets[currentWeight] %= 2;
      if (buckets[currentWeight] == 1) {
        biggestWeight = currentWeight;
      }
      currentWeight--;
    } else {
      buckets[currentWeight] -= 1;
      if (biggestWeight - currentWeight > currentWeight) {
        biggestWeight -= currentWeight;
      } else {
        buckets[biggestWeight - currentWeight] += 1;
        biggestWeight = 0;
      }
    }
  }

  return biggestWeight;
};
// @lc code=end


/**
 * - Time complexity: O(N + W).
 *   Putting the N stones of the input array into the bucket array is O(N), because inserting each stone is an O(1) operation.
 *   In the worst case, the main loop iterates through all of the W indexes of the bucket array. Processing each bucket is an O(1) operation. This, therefore, is O(W).
 *   Seeing as we don't know which is larger out of N and W, we get a total of O(N + W).
 * 
 * - Space complexity: O(W).
 *   We allocated a new array of size W.
 */


lastStoneWeight([2, 7, 4, 1, 8, 1])