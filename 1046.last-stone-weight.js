/*
 * @lc app=leetcode id=1046 lang=javascript
 *
 * [1046] Last Stone Weight
 */

// @lc code=start
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
  // Set up the bucket array.
  let maxWeight = stones[0];
  for (const stone of stones) {
    maxWeight = Math.max(maxWeight, stone);
  }

  let buckets = new Array(maxWeight + 1).fill(0);
  // Bucket sort.
  for (const weight of stones) {
    buckets[weight]++;
  }

  // Scan through the buckets.
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
      buckets[currentWeight]--;
      if (biggestWeight - currentWeight <= currentWeight) {
        buckets[biggestWeight - currentWeight]++;
        biggestWeight = 0;
      } else {
        biggestWeight -= currentWeight;
      }
    }
  }

  return biggestWeight;
};
// @lc code=end

