/*
 * @lc app=leetcode id=76 lang=javascript
 *
 * [76] Minimum Window Substring
 */

// @facebook, @amazon, @linkedin, @snapchat, @google, @apple
// #hash-table, #two-pointers, #sliding-window
// #google-interview

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  if (s.length === 0 || t.length === 0 || s.length < t.length) {
    return '';
  }

  let dict = {};
  t.split('').forEach(c => {
    if (dict[c]) {
      dict[c] += 1;
    } else {
      dict[c] = 1;
    }
  });

  let count = Object.keys(dict).length;
  let min = '';
  let l = 0; r = -1;
  while (r < s.length) {
    // found a valid substring
    if (count == 0) {
      let char = s[l];

      if (dict[char] != null) {
        dict[char] ++;
      }

      if (dict[char] > 0) {
        count ++;
      }

      let temp = s.substring(l, r + 1);

      if (min == '') {
        min = temp;
      } else {
        min = min.length < temp.length ? min : temp;
      }

      l ++;
    } else {
      r ++;
      let char = s[r];

      if (dict[char] != null) {
        dict[char] --;
      }
      
      if (dict[char] == 0) {
        count --;
      }
    }
  }

  return min;
};
// @lc code=end


const mw = minWindow("ADOBECODEBANC", "ABC");
console.log(mw);