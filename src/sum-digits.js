/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let valueAsString = n.toString();
  let result = n;

  while (result > 9) {
    result = 0;

    for (let j = 0; j < valueAsString.length; j++) {
      result += +valueAsString[j];
    }
    valueAsString = result.toString();
  }

  return result;
}

module.exports = {
  getSumOfDigits
};
