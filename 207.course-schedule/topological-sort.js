/*
 * @lc app=leetcode id=207 lang=javascript
 *
 * [207] Course Schedule
 */

/**
 * @Nvidia
 * tags: #graph, #topological-sort, #array-intervals
 * {@link 210.course-schedule-ii.js}
 * {@link 332.reconstruct-itinerary.js}
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
  const queue = [];
  for (let i = 0; i < inDegrees.length; i++) {
    if (inDegrees[i] === 0) queue.push(i);
  }

  let count = 0;
  while (queue.length > 0) {
    const pre0 = queue.shift();
    count++;
    for (const [c, pre] of prerequisites) {
      if (pre === pre0) {
        inDegrees[c]--;
        if (inDegrees[c] === 0) queue.push(c);
      }
    }
  }

  return (numCourses === count);
};
// @lc code=end


/**
 * - Time complexity: O(|E| + |V|) where |V| is the number of courses, and |E| is the number of dependencies.
 * - Space complexity: O(|E| + |V|), with the same denotation as in the above time complexity. 
 */