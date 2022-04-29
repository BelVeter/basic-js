const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) { /* matrix */
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let rez = matrix.reduce((sum, element) => {
    let count = 0;
    element.forEach((el) => {
        el == '^^' ? count++: ''; 
    });
    return sum=sum+count;
  },0);

  return rez;
}

module.exports = {
  countCats
};
