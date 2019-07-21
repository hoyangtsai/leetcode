/*
 * @lc app=leetcode id=6 lang=javascript
 *
 * [6] ZigZag Conversion
 */
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows < 2) {
        return s;
    }

    const N = s.length;
    const arr = [...Array(numRows)].map(r => []);

    for (let i = 0; i < N; i++) {
        const pos = i % (2 * numRows - 2);
        const ii = pos < numRows ? pos : 2 * numRows - 2 - pos;
        arr[ii].push(s[i]);
    }

    return arr.map(r => r.join('')).join('');
};

