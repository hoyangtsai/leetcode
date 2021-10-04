/*
 * @lc app=leetcode id=833 lang=javascript
 *
 * [833] Find And Replace in String
 */

// @google
// #array, #string, #bfs
// #google-interview

// @lc code=start
/**
 * @param {string} s
 * @param {number[]} indices
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
var findReplaceString = function(s, indices, sources, targets) {
  // sort asce
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

    if (s.substring(pos, next) != find) {
      continue;
    }
    str += s.substring(curr, pos);
    str += replace;
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

// "abc"\n[0, 1]\n["ab", "bc"]\n["eee", "ffff"]
// "vmokgggqzp"\n[3, 5, 1]\n["kg", "ggq", "mo"]\n["s", "so", "bfr"]