/*
 * @lc app=leetcode id=68 lang=javascript
 *
 * [68] Text Justification
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
  const res = [[]];
  res[0].letters = 0;
  for (let word of words) {
    let row = res[res.length - 1];
    if (row.length && row.letters + row.length + word.length > maxWidth) {
      res.push([]);
      row = res[res.length - 1];
      row.letters = 0;
    }
    row.push(word);
    row.letters += word.length;
  }
  for (let r = 0; r < res.length; r++) {
    let row = res[r];
    if (row.length === 1 || r === res.length - 1) {
      res[r] = row.join(' ') + ' '.repeat(maxWidth - row.letters - row.length + 1);
      continue;
    }
    let line = row[0];
    let spaces = maxWidth - row.letters;
    let minSpaces = ' '.repeat(Math.floor(spaces / (row.length - 1)));
    let addSpace = spaces % (row.length - 1);
    for (let w = 1; w < row.length; w++) {
      line += minSpaces + (w <= addSpace ? ' ' : '') + row[w];
    }
    res[r] = line;
  }
  return res;
};
// @lc code=end

