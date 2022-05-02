/*
 * @lc app=leetcode id=399 lang=javascript
 *
 * [399] Evaluate Division
 */

/**
 * tags: #union-find, #disjoint-set
 */

// @lc code=start
/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
  let gidWeight = new Map();

  // Step 1). build the union groups
  for (let i = 0; i < equations.length; i++) {
    let equation = equations[i];
    let dividend = equation[0]
    let divisor = equation[1];
    let quotient = values[i];

    union(gidWeight, dividend, divisor, quotient);
  }

  // Step 2). run the evaluation, with "lazy" updates in find() function
  let results = [];
  for (let i = 0; i < queries.length; i++) {
    let query = queries[i];
    let dividend = query[0];
    let divisor = query[1];

    if (!gidWeight.has(dividend) || !gidWeight.has(divisor))
      // case 1). at least one variable did not appear before
      results[i] = -1.0;
    else {
      let dividendEntry = find(gidWeight, dividend);
      let divisorEntry = find(gidWeight, divisor);

      let dividendGid = dividendEntry[0];
      let divisorGid = divisorEntry[0];
      let dividendWeight = dividendEntry[1];
      let divisorWeight = divisorEntry[1];

      if (dividendGid != divisorGid)
        // case 2). the variables do not belong to the same chain/group
        results[i] = -1.0;
      else
        // case 3). there is a chain/path between the variables
        results[i] = dividendWeight / divisorWeight;
    }
  }

  function find(gidWeight, nodeId) {
    if(!gidWeight.has(nodeId)) {
      gidWeight.set(nodeId, [nodeId, 1.0]);
    }
    
    let entry = gidWeight.get(nodeId);
    // found inconsistency, trigger chain update
    if (entry[0] != (nodeId)) {
      let newEntry = find(gidWeight, entry[0]);
      gidWeight.set(nodeId, [newEntry[0], entry[1] * newEntry[1]]);
    }

    return gidWeight.get(nodeId);
  }

  function union(gidWeight, dividend, divisor, value) {
    let dividendEntry = find(gidWeight, dividend);
    let divisorEntry = find(gidWeight, divisor);

    let dividendGid = dividendEntry[0];
    let divisorGid = divisorEntry[0];
    let dividendWeight = dividendEntry[1];
    let divisorWeight = divisorEntry[1];

    // merge the two groups together,
    // by attaching the dividend group to the one of divisor
    if (dividendGid != divisorGid) {
      gidWeight.set(dividendGid, 
        [divisorGid, divisorWeight * value / dividendWeight]
      );
    }
  }

  return results;
};
// @lc code=end


/**
 * Let N be the number of input equations and M be the number of queries.
 * 
 * - Time complexity: O((M + N) * log^* N).
 * - Space complexity: O(N).
 */

// Output: [6.00000, 0.50000, -1.00000, 1.00000, -1.00000]
const res = calcEquation([["a", "b"], ["b", "c"]], [2.0, 3.0], [["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"]]);
console.log('res =>', res);