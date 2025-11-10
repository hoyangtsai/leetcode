/*
 * @lc app=leetcode id=166 lang=javascript
 *
 * [166] Fraction to Recurring Decimal
 */

// @lc code=start
/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
  if (numerator === 0) return "0";

  let result = "";

  // Determine the sign
  if (Math.sign(numerator) !== Math.sign(denominator)) {
    result += "-";
  }

  const num = Math.abs(numerator);
  const den = Math.abs(denominator);

  // Integer part
  const integerPart = Math.floor(num / den);
  result += integerPart.toString();

  let remainder = num % den;
  if (remainder === 0) {
    return result; // No fractional part
  }

  result += "."; // Decimal point

  const map = new Map(); // Map to store remainder positions
  let fractionalPart = "";
  let index = 0;

  while (remainder !== 0) {
    if (map.has(remainder)) {
      const repeatIndex = map.get(remainder);
      fractionalPart = fractionalPart.slice(0, repeatIndex) + "(" + fractionalPart.slice(repeatIndex) + ")";
      break;
    }

    map.set(remainder, index);
    remainder *= 10;
    const digit = Math.floor(remainder / den);
    fractionalPart += digit.toString();
    remainder = remainder % den;
    index++;
  }

  result += fractionalPart;
  return result;
};
// @lc code=end

