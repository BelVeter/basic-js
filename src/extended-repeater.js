const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  // console.log(options.additionSeparator)
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  if (options.addition !== undefined) options.addition= String(options.addition);
  if (options.additionRepeatTimes !== undefined) options.additionRepeatTimes=options.additionRepeatTimes*1;
  if (options.additionSeparator !== undefined) options.additionSeparator= String(options.additionSeparator);
  if (options.repeatTimes !== undefined) options.repeatTimes=options.repeatTimes*1;
  if (options.separator !== undefined) options.separator=String(options.separator);


  let addition=makeString(options.addition || '', options.additionRepeatTimes || 1, options.additionSeparator || '|');

  let str2=str+addition;

  rez = makeString(str2, +options.repeatTimes || 1, options.separator || '+');

  // console.log(rez);

  function makeString (str, len, glue) {
    // console.log(str, len, glue);
    let arr = new Array(+len).fill(str.toString());
    return arr.join(glue.toString());
  }

  return rez;
}

module.exports = {
  repeater
};

// console.log(repeater(true, { repeatTimes: 3, separator: '??? ', addition: false, additionRepeatTimes: 2, additionSeparator: '!!!' }))//'TESTstrADD!'
//'truefalse!!!false??? truefalse!!!false??? truefalse!!!false'