/*
 * @lc app=leetcode id=1136 lang=javascript
 *
 * [1136] Parallel Courses
 */

/**
 * tags: #topological-sort, #kahn-algorithm
 * {@link 207.course-schedule.js}
 * {@link 210.course-schedule-ii.js}
 * {@link 2050.parallel-courses-iii.js}
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} relations
 * @return {number}
 */
var minimumSemesters = function(n, relations) {
  let inDegrees = Array(n + 1).fill(0);
  let graph = Array(n + 1).fill([]);
  for (const [c, pre] of relations) {
    graph[c] = [...graph[c], pre];
    inDegrees[pre]++;
  }

  let queue = [];
  for (let i = 1; i < inDegrees.length; i++) {
    if (inDegrees[i] === 0) {
      queue.push(i);
    }
  }

  let step = 0;
  let studiedCount = 0;
  while (queue.length > 0) {
    step++;
    let nextQueue = [];
    for (const c of queue) {
      studiedCount++;
      for (const pre of graph[c]) {
        inDegrees[pre]--;
        // if all prerequisite courses learned
        if (inDegrees[pre] == 0) {
          nextQueue.push(pre);
        }
      }
    }
    queue = nextQueue;
  }

  // check if learn all courses
  return studiedCount == n ? step : -1;
};
// @lc code=end


/**
 * - Time complexity: O(N + E)
 * - Space complexity: O(N + E)
 */