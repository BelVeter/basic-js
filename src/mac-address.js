const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let hexSymbolsArray = ['1','2','3','4','5','6','7','8','9','0','a','b','c','d','e','f'];

  let result = true;
  let hexDigitsArray = n.split('-');
  if(hexDigitsArray.length !== 6) return false;
  hexDigitsArray.forEach((letter)=>{
    if(!isHex(letter)) result = false;
  });

  return result;

  function isHex(str){
    let rez = true;
    let hexLetters = str.split('');
    if(hexLetters.length !== 2) return false;
    hexLetters.forEach((letter) => {
      // console.log(letter.toLowerCase());
      // console.log(!hexSymbolsArray.includes(letter.toLowerCase()))
      if(!hexSymbolsArray.includes(letter.toLowerCase())) rez = false;
    });
  
    return rez;
  }

  
}

//console.log(isHex('z3'));

//console.log(isMAC48Address('10-1B-z3-84-45-E6'));


module.exports = {
  isMAC48Address
};
