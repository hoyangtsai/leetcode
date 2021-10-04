/*
 * @lc app=leetcode id=681 lang=javascript
 *
 * [681] Next Closest Time
 */

// @facebook, @amazon, @google
// #string, #enumeration
// #google-interview

// @lc code=start
/**
 * @param {string} time
 * @return {string}
 */
var nextClosestTime = function(time) {
  const findNext = (current, upperLimit, digits) => {
    if (current == upperLimit) {
      return digits[0];
    }
    let pos = digits.indexOf(current) + 1;
    while (pos < 4 && (digits[pos] > upperLimit || digits[pos] == current)) { // traverse one by one to find next greater digit
      pos++;
    }
    return pos == 4 ? digits[0] : digits[pos];
  }

  const digits = time.replace(/:/, '').split('').sort((a, b) => a - b);
  let result = time.split('');

  // find next digit for HH:M_
  result[4] = findNext(result[4], 9, digits);  // no upperLimit for this digit, i.e. 0-9
  if (result[4] > time.charAt(4)) {
    return result.join('');  // e.g. 23:43 -> 23:44
  }

  // find next digit for HH:_M
  result[3] = findNext(result[3], 5, digits);
  if (result[3] > time.charAt(3)) {
    return result.join('');  // e.g. 14:29 -> 14:41
  } 

  // find next digit for H_:MM
  result[1] = result[0] == 2 ? findNext(result[1], 3, digits) : findNext(result[1], 9, digits);
  if (result[1] > time.charAt(1)) {  
    return result.join('');  // e.g. 02:37 -> 03:00
  }

  // find next digit for _H:MM
  result[0] = findNext(result[0], 2, digits);
  return result.join('');  // e.g. 19:59 -> 11:11
};
// @lc code=end

const t = nextClosestTime('19:34');
console.log('t =>', t);