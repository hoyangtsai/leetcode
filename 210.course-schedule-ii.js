/*
 * @lc app=leetcode id=210 lang=javascript
 *
 * [210] Course Schedule II
 */

/**
 * tags: #graph, #topological-sort, #breadth-first-search
 * #google-interview
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
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

  const res = [];
  while (q.length) {
    const pre0 = q.shift();
    numCourses--;
    res.push(pre0);
    for (const [c, pre] of prerequisites) {
      if (pre === pre0) {
        inDegrees[c]--;
        if (inDegrees[c] === 0) q.push(c);
      }
    }
  }

  return numCourses === 0 ? res : [];
};
// @lc code=end

/**
 * Node Indegree
 * 
 * - Time complexity: O(V + E) where V represents the number of vertices and E represents the number of edges. We pop each node exactly once from the zero-in-degree queue and that gives us V. Also, for each vertex, we iterate over its adjacency list and in totality, we iterate over all the edges in the graph which gives us E. Hence, O(V + E)
 * - Space complexity: O(V + E).
 */

const res = findOrder(4, [[1, 0], [2, 0], [3, 1], [3, 2]]);