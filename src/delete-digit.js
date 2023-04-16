/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let nAsString = n.toString();
  let result = 0;

  for (let i = 0; i < nAsString.length; i++) {
    let createdNumber = "";

    for (let j = 0; j < nAsString.length; j++) {
      createdNumber += i !== j ? nAsString[j] : "";
    }

    if (+createdNumber > result) {
      result = +createdNumber;
    }
  }

  return result;
}

module.exports = {
  deleteDigit
};
