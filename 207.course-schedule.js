/*
 * @lc app=leetcode id=207 lang=javascript
 *
 * [207] Course Schedule
 */

/**
 * tags: #graph, #breadth-first-search
 * {@link findOrder|./210.course-schedule-ii.js}
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  const inDegrees = Array(numCourses).fill(0);
  // index as course id
  for (const [c, pre] of prerequisites) {
    inDegrees[c]++;
  }

  // Add all vertices with 0 in-degree to the queue
  // find course id is 0 
  const q = [];
  for (let i = 0; i < inDegrees.length; i++) {
    if (inDegrees[i] === 0) q.push(i);
  }

  let count = 0;
  while (q.length) {
    const pre0 = q.shift();
    count++;
    for (const [c, pre] of prerequisites) {
      if (pre === pre0) {
        inDegrees[c]--;
        if (inDegrees[c] === 0) q.push(c);
      }
    }
  }

  return (numCourses === count);
};
// @lc code=end

