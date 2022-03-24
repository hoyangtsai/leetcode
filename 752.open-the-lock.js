/*
 * @lc app=leetcode id=752 lang=javascript
 *
 * [752] Open the Lock
 */

/**
 * tags: #breadth-first-search
 * {@link 994.rotting-oranges.js}
 */

// @lc code=start
/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
  const dead = new Set(deadends);

  let queue = ['0000', null];
  let seen = new Set(['0000']);
  let depth = 0;

  while(queue.length > 0) {
    let node = queue.shift();
    if (node == null) {
      depth ++;
      if (queue[queue.length - 1] != null) {
        queue.push(null);
      }
    } else if (node == target) {
      return depth;
    } else if (!dead.has(node)) { // add new 4 digit to queue
      for (let i = 0; i < 4; i++) {
        for (let d of [-1, 1]) { // minus or plus 1
          let y = (Number(node.charAt(i)) + d + 10) % 10;
          let nei = node.substring(0, i) + String(y) + node.substring(i + 1);
          if (!seen.has(nei)) {
            seen.add(nei);
            queue.push(nei);
          }
        }
      }
    }
  }
  return -1;
};
// @lc code=end


const step = openLock(["0201", "0101", "0102", "1212", "2002"], "0202");
console.log('step =>', step);