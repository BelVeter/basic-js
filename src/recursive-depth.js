const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let depth = 0;
    if(Array.isArray(arr)){
      arr.forEach((el)=>{
        let depthLow = this.calculateDepth(el);
        if(depthLow>depth) depth=depthLow;
        //console.log(depthLow);
      });
      return depth +1;
    }
    else{
      return 0;
    }
    
  }

}

module.exports = {
  DepthCalculator
};

//depthCalc = new DepthCalculator();

//console.log('--'+depthCalc.calculateDepth([1, [4, 5,[4, 5]], 3, [4, 5,[4, 5]]]));
