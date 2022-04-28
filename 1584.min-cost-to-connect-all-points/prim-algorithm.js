/*
 * @lc app=leetcode id=1584 lang=javascript
 *
 * [1584] Min Cost to Connect All Points
 */

/**
 * tags: #minimum-spanning-tree, #prim-algorithm
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function(points) {
  const n = points.length;

  // Track nodes which are included in MST.
  let inMST = Array(n).fill(false);

  let minDist = Array(n).fill(Infinity);
  minDist[0] = 0;

  let mstCost = 0;
  let edgesUsed = 0;

  while (edgesUsed < n) {
    let currMinEdge = Infinity;
    let currNode = -1;

    // Pick least weight node which is not in MST.
    for (let node = 0; node < n; ++node) {
      if (!inMST[node] && currMinEdge > minDist[node]) {
        currMinEdge = minDist[node];
        currNode = node;
      }
    }

    mstCost += currMinEdge;
    edgesUsed++;
    inMST[currNode] = true;

    // Update adjacent nodes of current node.
    for (let nextNode = 0; nextNode < n; ++nextNode) {
      let weight = Math.abs(points[currNode][0] - points[nextNode][0]) +
        Math.abs(points[currNode][1] - points[nextNode][1]);

      if (!inMST[nextNode] && minDist[nextNode] > weight) {
        minDist[nextNode] = weight;
      }
    }
  }

  return mstCost;
};
// @lc code=end


/**
 * - Time complexity: O(N^2).
 * - Space complexity: O(N).
 */