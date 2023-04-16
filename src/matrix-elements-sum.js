/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let result = 0;
  let col = 0;

  while (col < matrix[0].length) {
    let row = 0;

    while (row < matrix.length) {
      if (matrix[row][col] === 0) {
        break;
      }
      result += matrix[row][col];
      row++;
    }

    col++;
  }

  return result;
}

module.exports = {
  getMatrixElementsSum
};
