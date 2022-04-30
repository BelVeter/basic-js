const { NotImplementedError } = require('../extensions/index.js');

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
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let container = [];

  matrix.forEach((row, rowIndex)=>{
    row.forEach((cell, index)=>{
      //console.log(rowIndex, index, cell, (!hasZeroAbove(rowIndex, index) && cell>0));
      if(!hasZeroAbove(rowIndex, index) && cell>0) container.push(cell);
    });
  });

  let sum = container.reduce((sum, el)=>sum+el,0);
  //console.log(container, sum);

  return sum;

  function hasZeroAbove(rowIndex, index) {
    if(rowIndex==0) return false;
    else if (matrix[rowIndex-1][index]===0) return true;
    else return false;
  }
}

// let matrix = [
//     [0, 1, 1, 2],
//     [0, 5, 0, 0],
//     [2, 0, 3, 3]
//    ];

//    getMatrixElementsSum(matrix);

module.exports = {
  getMatrixElementsSum
};
