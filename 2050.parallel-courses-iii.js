/*
 * @lc app=leetcode id=2050 lang=javascript
 *
 * [2050] Parallel Courses III
 */

/**
 * tags: #topological-sort, #kahn-algorithm
 * {@link 207.course-schedule.js}
 * {@link 1136.parallel-courses.js}
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} relations
 * @param {number[]} time
 * @return {number}
 */
var minimumTime = function(n, relations, time) {
  const graph = new Map();
  for (let i = 0; i < n; i++) {
    graph.set(i, []);
  }

  const inDegrees = Array(n).fill(0);
  for (const [c, pre] of relations) {
    const x = c - 1;
    const y = pre - 1;
    graph.get(x).push(y)
    inDegrees[y]++;
  }

  let queue = [];
  let maxTime = Array(n).fill(0);
  for (let node = 0; node < n; node++) {
    if (inDegrees[node] === 0) {
      queue.push(node);
      maxTime[node] = time[node];
    }
  }

  while (queue.length > 0) {
    let node = queue.shift();

    for (const neighbor of graph.get(node)) {
      maxTime[neighbor] = Math.max(maxTime[neighbor], maxTime[node] + time[neighbor]);
      inDegrees[neighbor]--;

      if (inDegrees[neighbor] == 0) {
        queue.push(neighbor);
      }
    }
  }

  let ans = 0;
  for (let node = 0; node < n; node++) {
    ans = Math.max(ans, maxTime[node]);
  }
  return ans;
};
// @lc code=end


/**
 * - Time complexity: O(n + e)
 * - Space complexity: O(n + e)
 */