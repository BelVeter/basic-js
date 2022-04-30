const { NotImplementedError } = require('../extensions/index.js');

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
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let s1Chars =[];
  let s2Chars =[];

  let s1Array = s1.split('');
  let s2Array = s2.split('');

  s1Array.forEach((el)=>{
    if(!s1Chars.includes(el)) s1Chars.push(el);
  });

  s2Array.forEach((el)=>{
    if(!s2Chars.includes(el)) s2Chars.push(el);
  });

  let count=0;
  s1Chars.forEach((el)=>{
    count+=countChars(el);
  });

  return count;

  function countChars(char){
    let count1 = s1Array.filter((el)=>{
      return el==char;
    }).length;

    let count2 = s2Array.filter((el)=>{
      return el==char;
    }).length;

    return Math.min(count1, count2);
  }

}

//console.log(getCommonCharacterCount("aabcc", "adcaa"));

module.exports = {
  getCommonCharacterCount
};
