/*
 * @lc app=leetcode id=1964 lang=javascript
 *
 * [1964] Find the Longest Valid Obstacle Course at Each Position
 */

/**
 * tags: #binary-search, #bisect-right
 */

// @lc code=start
/**
 * @param {number[]} obstacles
 * @return {number[]}
 */
var longestObstacleCourseAtEachPosition = function(obstacles) {
  const n = obstacles.length;
  let lisLength = 0;
  
  // to represent an array list of dynamic size.
  function bisectRight(A, target, right) {
    if (right == 0) return 0;
    
    let left = 0;
    while (left < right) {
      let mid = left + parseInt((right - left) / 2);
      if (A[mid] <= target)
        left = mid + 1;
      else
        right = mid;
    }
    return left;
  }

  // lis[i] records the lowest increasing sequence of length i + 1.
  let answer = Array(n), lis = Array(n);

  for (let i = 0; i < n; ++i) {
    let height = obstacles[i];
    
    // Find the rightmost insertion position idx.
    let idx = bisectRight(lis, height, lisLength);
    
    if (idx == lisLength) lisLength++;

    lis[idx] = height;
    answer[i] = idx + 1;
  }

  return answer;
};
// @lc code=end


/**
 * - Time complexity: O(n log n).
 * - Space complexity: O(n).
 */