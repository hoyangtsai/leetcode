/*
 * @lc app=leetcode id=593 lang=javascript
 *
 * [593] Valid Square
 */

// @google
// #math
// #top-google-questions

// @lc code=start
/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
var validSquare = function(p1, p2, p3, p4) {
  // let p = [p1, p2, p3, p4];

  // make it a diamond shape
  // p.sort((a, b) => {
  //   // same x coord, sort y
  //   if (a[0] == b[0]) {
  //     return a[1] - b[1];
  //   } else { // same y coord, sort x
  //     return a[0] - b[0];
  //   }
  // });

  if (isSame(p1, p2) || isSame(p1, p3) ||
    isSame(p1, p4) || isSame(p2, p3) || 
    isSame(p3, p4) || isSame(p2, p4)) return false;
  

  // without sorting using a set
  const s = new Set();

  s.add(dist(p1, p2));
  s.add(dist(p1, p3));
  s.add(dist(p1, p4));
  s.add(dist(p2, p3));
  s.add(dist(p2, p4));
  s.add(dist(p3, p4));

  // sqrt((x1 - x2)^2 + (y1 - y2)^2) = two vertex distance
  function dist(p1, p2) {
    return (p1[0] - p2[0]) * (p1[0] - p2[0]) + (p1[1] - p2[1]) * (p1[1] - p2[1]);
  }

  function isSame(p1, p2) {
    return p1[0] == p2[0] && p1[1] == p2[1];
  }

  // return dist(p[0], p[1]) != 0 && 
  //   dist(p[0], p[1]) == dist(p[1], p[3]) &&
  //   dist(p[1], p[3]) == dist(p[3], p[2]) &&
  //   dist(p[3], p[2]) == dist(p[2], p[0]) &&
  //   dist(p[0], p[3]) == dist(p[1], p[2]);

  return s.size == 2;
};
// @lc code=end


/**
 * Sorting
 * 
 * - Time complexity: O(1).
 * - Space complexity: O(1).
 */
