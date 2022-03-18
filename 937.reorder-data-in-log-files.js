/*
 * @lc app=leetcode id=937 lang=javascript
 *
 * [937] Reorder Data in Log Files
 */

/**
 * tags: #sorting. #string-group
 */

// @lc code=start
/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
  const body = (s) => s.slice(s.indexOf(' ') + 1);
  const isDigit = (c) => /\d/.test(c);

  const compare = (a, b) => {
    const n = body(a).localeCompare(body(b));
    if (n !== 0) return n;
    return a.localeCompare(b);
  }

  const digitLogs = [];
  const letterLogs = [];
  for (const log of logs) {
    if (isDigit(body(log))) digitLogs.push(log);
    else letterLogs.push(log);
  }

  return [...letterLogs.sort(compare), ...digitLogs];
};
// @lc code=end

