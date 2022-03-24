/*
 * @lc app=leetcode id=1200 lang=javascript
 *
 * [1200] Minimum Absolute Difference
 */

/**
 * tags: #counting-sort, #number-pair
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
  // Initialize the auxiliary array `line`.
  // Keep a record of the minimum element and the maximum element.
  let minElement = arr[0],
      maxElement = arr[0];
  for (const num of arr) {
    minElement = Math.min(minElement, num);
    maxElement = Math.max(maxElement, num);
  }
  // create a counting array based on the min and max values
  let line = new Array(maxElement - minElement + 1).fill(0);

  let shift = -minElement;
  // For each integer `num` in `arr`, we increment line[num + shift] by 1.
  for (const num of arr) {
    line[num + shift] = 1;
  }

  // Initialize the absolute difference `minPairDiff` as a huge value 
  // like `maxElement - minElement` in order not to miss the absolute 
  // difference of the first pair.
  var minPairDiff = maxElement - minElement; // 10
  let answer = [];

  // Iterate over the array `line` and check if line[curr] 
  // holds the occurrence of an input integer.
  for (let prev = 0, curr = 1; curr <= maxElement + shift; curr++) {
    // If line[curr] == 0, meaning there is no occurrence of the integer (curr - shift) 
    // held by this index, we will move on to the next index.
    if (line[curr] === 0) {
      continue;
    }

    // If the difference (curr - prev) equals `minPairDiff`, we add this pair 
    // {prev - shift, curr - shift} to the answer list. Otherwise, if the difference 
    // (curr - prev) is smaller than `minPairDiff`, we empty the answer list and add 
    // the pair {curr - shift, prev - shift} to the answer list and update the `minPairDiff`
    if (curr - prev === minPairDiff) {
      answer.push([prev - shift, curr - shift]);
    } else if (curr - prev < minPairDiff) {
      answer = [[prev - shift, curr - shift]];
      minPairDiff = curr - prev;
    }

    // Update prev as curr.     
    prev = curr;
  }

  return answer;
};
// @lc code=end


/**
 * - Time complexity: O(n + m).
 * - Space complexity: O(n + m).
 */


const ans1 = minimumAbsDifference([4, 2, 1, 3])
console.log('ans1 :>> ', ans1);
const ans2 = minimumAbsDifference([-2,5,-5,3,1,4])
console.log('ans2 :>> ', ans2);
