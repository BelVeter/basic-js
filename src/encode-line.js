const { NotImplementedError } = require('../extensions/index.js');

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
  if (str == '') return '';
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let strArray = str.split('');
  let char = '';
  let count = 0;
  let rez='';

  strArray.forEach((el, index)=>{
    if (char !== el) {
      if(index>0) {
        if(count==1){
          rez = rez+(char);
        }
        else{//more than 1
          rez = rez+(count+char);
        }
        
      }
      // console.log('new char');
      char=el;
      count=1;
    }
    else {
      count++;
      // console.log('the same char');
    }
  });
  if(count==1){
    rez = rez+(char);
  }
  else{//more than 1
    rez = rez+(count+char);
  }

return rez;
}

// console.log(encodeLine('aaaatttt'));

module.exports = {
  encodeLine
};
