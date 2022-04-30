const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let result = [];

  matrix.forEach((row, rowIndex)=>{
    result.push([]);
    row.forEach((cell, index)=>{
      //console.log(rowIndex,index,result[rowIndex]);
      result[rowIndex].push(getNumberOfMines(rowIndex, index));
      //result[rowIndex][index] = getNumberOfMines(rowIndex, index);
    });
  });

  return (result);

  // function printArray(ar){
  //   ar.forEach((el)=>{
  //     console.log(el)
  //   });
  // }

  function getNumberOfMines(rowIndex, index){
    let count = 0;
    for(let r=rowIndex-1; r<=rowIndex+1; r++) {
      if(r<0 || r>matrix.length-1) {
        continue;
      }
      for(let c = index-1; c<=index+1; c++){
        if(c<0 || c>matrix[0].length-1) continue;
        if (matrix[r][c] == true && !(r==rowIndex && c==index)) {
          count++;
        }
      }
    }
    return count;
  }
}

module.exports = {
  minesweeper
};
