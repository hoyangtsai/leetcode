/*
 * @lc app=leetcode id=547 lang=javascript
 *
 * [547] Number of Provinces
 */

// #breadth-first-search

// @lc code=start
/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  const N = isConnected.length;
  let visited = new Array(N).fill(0);
  let count = 0;
  let queue = [];
  for (let i = 0; i < N; i++) {
    if (visited[i] == 0) {
      queue.push(i);
      while (queue.length > 0) {
        let s = queue.shift();
        visited[s] = 1;
        for (let j = 0; j < N; j++) {
          if (isConnected[s][j] == 1 && visited[j] == 0)
            queue.push(j);
        }
      }
      count++;
    }
  }
  return count;
};
// @lc code=end


/**
 * Breadth-First Search
 *
 * - Time complexity: O(n^2). The complete matrix of size n^2 is traversed.
 * - Space complexity: O(n).
 */