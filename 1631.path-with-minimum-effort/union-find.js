/*
 * @lc app=leetcode id=1631 lang=javascript
 *
 * [1631] Path With Minimum Effort
 */

/**
 * tags: #union-find, #disjoint-set, #matrix, #minimum-spanning-tree
 */

// @lc code=start
/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function(heights) {
  const row = heights.length;
  const col = heights[0].length;

  function Edge(x, y, difference) {
    this.x = x;
    this.y = y;
    this.difference = difference;
  }

  function UnionFind (heights) {
    const row = heights.length;
    const col = heights[0].length;
    this.edgeList = [];
    
    const parent = new Array(row * col);
    const rank = new Array(row * col);
    
    // build the map
    for (let currentRow = 0; currentRow < row; currentRow++) {
      for (let currentCol = 0; currentCol < col; currentCol++) {
        if (currentRow > 0) {
          this.edgeList.push(new Edge(
            currentRow * col + currentCol,
            (currentRow - 1) * col + currentCol,
            Math.abs(heights[currentRow][currentCol] - heights[currentRow - 1][currentCol])
          ));
        }
        if (currentCol > 0) {
          this.edgeList.push(new Edge(
            currentRow * col + currentCol,
            currentRow * col + currentCol - 1,
            Math.abs(heights[currentRow][currentCol] - heights[currentRow][currentCol - 1])
          ));
        }

        parent[currentRow * col + currentCol] = currentRow * col + currentCol;
      }
    }

    this.find = function(x) {
      if (parent[x] != x) {
        // compress route to O(1)
        parent[x] = this.find(parent[x]);
      }
      return parent[x];
    }

    this.union = function(x, y) {
      let parentX = this.find(x);
      let parentY = this.find(y);
      if (parentX != parentY) {
        // avoid overweight one side of tree
        // ex. rank[3] = 5, the tree of root 3 has 5 nodes
        if (rank[parentX] > rank[parentY]) {
          parent[parentY] = parentX;
        } else if (rank[parentX] < rank[parentY]) {
          parent[parentX] = parentY;
        } else {
          parent[parentY] = parentX;
          rank[parentX] += 1;
        }
      }
    }
  }

  if (row == 1 && col == 1) return 0;
  let unionFind = new UnionFind(heights);
  let edgeList = unionFind.edgeList;
  edgeList.sort((a, b) => a.difference - b.difference);

  for (let i = 0; i < edgeList.length; i++) {
    let x = edgeList[i].x;
    let y = edgeList[i].y;
    unionFind.union(x, y);
    if (unionFind.find(0) == unionFind.find(row * col - 1)) {
      return edgeList[i].difference;
    }
  }
  return -1;
};
// @lc code=end


/**
 * - Time complexity: O(m * n (log(m * n)))
 * - Space complexity: O(m * n), we use arrays edgeList, parent and size of size m * n.
 */