const { NotImplementedError } = require('../extensions/index.js');

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
  let numArray = String(n).split('');
  let digisArray =[];
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  numArray.forEach((element, index) => {
    digisArray.push(removeDigit(index));
  });

  return Math.max(...digisArray);

  function removeDigit(index){
    let arrCopy = numArray.slice();
    arrCopy.splice(index, 1);
    return Number(arrCopy.join(''));
  }

}

//console.log(deleteDigit(152));

module.exports = {
  deleteDigit
};
