/*
 * @lc app=leetcode id=286 lang=javascript
 *
 * [286] Walls and Gates
 */

/**
 * tags: #matrix, #breadth-first-search
 */

// @lc code=start
/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function(rooms) {
  const m = rooms.length;
  if (m === 0) return;
  const n = rooms[0].length;

  const dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]];
  const EMPTY = Math.pow(2, 31) - 1;
  const GATE = 0;

  // find gates
  let q = [];
  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      if (rooms[row][col] == GATE) {
        q.push([row, col]);
      }
    }
  }

  while(q.length > 0) {
    let gate = q.shift();
    let row = gate[0];
    let col = gate[1];

    for (let [dx, dy] of dirs) {
      let r = row + dx;
      let c = col + dy;
      // cannot go forward
      if (r < 0 || c < 0 || r >= m || c >= n || rooms[r][c] != EMPTY) {
        continue;
      }
      rooms[r][c] = rooms[row][col] + 1;
      q.push([r, c]);
    }
  }
};
// @lc code=end

