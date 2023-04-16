/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const minusIndexes = [];
  const sortedArrayWithValuesOnly = arr.filter((item, index) => {
    if (item < 0) {
      minusIndexes.push(index);
      return false;
    }
    return true;
  }).sort((a, b) => a - b);

  minusIndexes.forEach(item => sortedArrayWithValuesOnly.splice(item, 0, -1));

  return sortedArrayWithValuesOnly;
}

module.exports = {
  sortByHeight
};
