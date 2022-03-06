/*
 * @lc app=leetcode id=399 lang=javascript
 *
 * [399] Evaluate Division
 */

/**
 * tags: #depth-first-search, #backtracking
 * #google-interview
 */

// @lc code=start
/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
  // Step 1). build the graph from the equations
  let graph = new Map();
  for (let i = 0; i < equations.length; i++) {
    const eq = equations[i];
    let dividend = eq[0];
    let divisor = eq[1];
    let quotient = values[i];

    if (!graph.has(dividend)) {
      graph.set(dividend, new Map());
    }
    if (!graph.has(divisor)) {
      graph.set(divisor, new Map());
    }

    graph.get(dividend).set(divisor, quotient);
    graph.get(divisor).set(dividend, 1 / quotient);
  }

  // Step 2). Evaluate each query via backtracking (DFS)
  // by verifying if there exists a path from dividend to divisor
  let results = [];
  for (let i = 0; i < queries.length; i++) {
    let query = queries[i];
    let dividend = query[0];
    let divisor = query[1];

    if (!graph.has(dividend) || !graph.has(divisor)) {
      results[i] = -1.0;
    } else if (dividend == divisor) {
      results[i] = 1.0;
    } else {
      let visited = new Set();
      results[i] = backtrackEvaluate(graph, dividend, divisor, 1, visited);
    }
  }

  function backtrackEvaluate(graph, currNode, targetNode, accProduct, visited) {
    // mark the visit
    visited.add(currNode);
    let ret = -1.0;

    let neighbors = graph.get(currNode);
    
    if (neighbors.has(targetNode)) {
      ret = accProduct * neighbors.get(targetNode);
    } else {
      for (const [nextNode, value] of neighbors) {
        if (visited.has(nextNode)) {
          continue;
        }
        ret = backtrackEvaluate(
          graph, nextNode, targetNode, accProduct * value, visited);
        if (ret != -1.0)
          break;
      }
    }

    // unmark the visit, for the next backtracking
    visited.delete(currNode);
    return ret;
  }

  return results;
};
// @lc code=end

/**
 * Path Search in Graph
 * 
 * Let N be the number of input equations and M be the number of queries.
 * 
 * - Time complexity: O(M * N).
 * - Space complexity: O(N)
 */

// Output: [6.00000, 0.50000, -1.00000, 1.00000, -1.00000]
const res = calcEquation([["a", "b"], ["b", "c"]], [2.0, 3.0], [["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"]]);
console.log('res =>', res);