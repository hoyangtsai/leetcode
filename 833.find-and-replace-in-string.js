/*
 * @lc app=leetcode id=833 lang=javascript
 *
 * [833] Find And Replace in String
 */

/**
 * tags: #string-replace
 * #google-interview
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number[]} indices
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
var findReplaceString = function(s, indices, sources, targets) {
  // sort ascend
  const indexMap = {};
  indices.forEach((indexS, i) => {
    indexMap[indexS] = i;
  });
  indices.sort((a, b) => a - b);

  let str = '';
  let curr = 0;
  for (let pos of indices) {
    let i = indexMap[pos];
    let find = sources[i];
    let replace = targets[i];
    let next = pos + find.length;
    // not found
    if (s.substring(pos, next) != find) {
      continue;
    }
    // concat string from current index to the replace index of the indices
    str += s.substring(curr, pos);
    // concat target string
    str += replace;
    // update current index for next iteration
    curr = next;
  }
  str += s.substring(curr);
  return str;
};
// @lc code=end


// const r1 = findReplaceString("abcd", [0, 2], ["a", "cd"], ["eee", "ffff"]);
// console.log('r1 =>', r1);

const r2 = findReplaceString("abcd", [0, 2], ["ab", "ec"], ["eee", "ffff"]);
console.log('r2 =>', r2);
