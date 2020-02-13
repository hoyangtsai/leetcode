/*
 * @lc app=leetcode id=345 lang=javascript
 *
 * [345] Reverse Vowels of a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

    let i = 0, j = s.length - 1;
    let arr = s.split('');

    while (i < j) {
        let ci = s.charAt(i);
        let cj = s.charAt(j);

        if (!vowels.has(ci)) {
            i ++;
        } else if (!vowels.has(cj)) {
            j --;
        } else {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i ++;
            j --;
        }
    }

    return arr.join('');
};
// @lc code=end
