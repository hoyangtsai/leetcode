/*
 * @lc app=leetcode id=207 lang=javascript
 *
 * [207] Course Schedule
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  let courseDict = new Map();

  for (const [c, pre] of prerequisites) {
    if (courseDict.has(c)) {
      let edges = courseDict.get(c);
      edges.push(pre);
      courseDict.set(c, edges);
    } else {
      courseDict.set(c, [pre])
    }
  }

  function isCyclic(currCourse, courseDict, visited, path) {
    if (path[currCourse])
      // come across a previously visited node, i.e. detect the cycle
      return true;

    // no following courses, no loop.
    if (!courseDict.has(currCourse)) return false;

    // before backtracking, mark the node in the path
    path[currCourse] = true;

    let ret = false;
    // postorder DFS, to visit all its children first.
    for (const preCourse of courseDict.get(currCourse)) {
      if (visited[preCourse]) continue;

      ret = isCyclic(preCourse, courseDict, visited, path);
      if (ret) break;
    }

    // after the visits of children, we come back to process the node itself
    // remove the node from the path
    path[currCourse] = false;

    // Now that we've visited the nodes in the downstream,
    // we complete the check of this node.
    visited[currCourse] = true;
    return ret;
  }

  let visited = Array(numCourses).fill(false);
  let path = Array(numCourses).fill(false);

  for (let currCourse = 0; currCourse < numCourses; currCourse++) {
    if (isCyclic(currCourse, courseDict, visited, path))
      return false;
  }

  return true;
};
// @lc code=end


canFinish(4, [[1,2],[0,1],[2,0],[0,4],[4,3]])