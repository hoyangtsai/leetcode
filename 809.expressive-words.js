/*
 * @lc app=leetcode id=809 lang=javascript
 *
 * [809] Expressive Words
 */

// @cisco, @google
// #array, #two-pointers
// #google-interview

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var expressiveWords = function(s, words) {
  if (s == '' || words.length == 0) {
    return 0;
  }

  function isStretchy(S, word) {
    if (word == '') {
      return false;
    }
    let i = 0, j = 0;
    while (i < S.length && j < word.length) {
      if (S.charAt(i) === word.charAt(j)) {
        let len1 = getRepeatLength(S, i);
        let len2 = getRepeatLength(word, j);
        if (len1 < 3 && len1 != len2 || len1 >= 3 && len1 < len2) {
          return false;
        }
        i += len1;
        j += len2;
      } else {
        return false;
      }
    }
    return S.length === i && word.length === j;
  }

  function getRepeatLength(str, i) {
    let j = i;
    while(j < str.length && str[i] === str[j]) {
      j ++;
    }
    // repeat times
    return j - i;
  }

  let count = 0;
  for (let word of words) {
    if (isStretchy(s, word)) {
      count++;
    }
  }
  return count;
};
// @lc code=end

