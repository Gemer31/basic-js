/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let result = 0;
  let s2Copy = s2;

  for (let i = 0; i < s1.length; i++) {
    let j = 0;

    while (j < s2Copy.length) {
      if (s1[i] === s2Copy[j]) {
        result++;
        s2Copy = s2Copy.replace(s2Copy[j],"❌");
        break;
      }
      j++;
    }
  }

  return result;
}

module.exports = {
  getCommonCharacterCount
};
