/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const match = str.match(/(.)\1*/g)
  if (!match) return "";
  return match.reduce((result, item) => result + (item.length === 1 ? "" : item.length) + item.charAt(0), "");
}

module.exports = {
  encodeLine
};
