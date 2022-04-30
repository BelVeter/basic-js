const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  // fs = require('fs');
  // fs.writeFile('helloworld.txt', 'Hello World!', function (err) {
  //   if (err) return console.log(err);
  //   console.log('Hello World > helloworld.txt');
  // });

  if(!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }


  //console.log(arr);
  let arrCopy = arr.slice();
  //console.log(arrCopy);
  let skipStep=false;
  arrCopy.forEach((el, index) => {
    if(isControll(el)){
      if(skipStep){
        skipStep=false;
        return;
      }
      switch(el){
        case '--discard-next':
          if(index<arrCopy.length-1) {
            delete(arrCopy[index+1]);
          }
        break;
        case '--discard-prev':
          if(index>0) {
            delete(arrCopy[index-1]);
          }
        break;
        case '--double-next':
          arrCopy.splice(index+1, 0, arrCopy[index+1]);
        break;
        case '--double-prev':
          arrCopy.splice(index-1, 0, arrCopy[index-1]);
          skipStep=true;
        break;
        default:
          //console.log('no way')
          break;
      }
    }
    //console.log(el)
  });

  let outArray=arrCopy.filter((el)=>{
    return (el!==undefined && !isControll(el));
  });


  return outArray;


  function isControll(el){

    let controlCodes=['--discard-next', '--discard-prev', '--double-next', '--double-prev'];

    if(typeof el == 'string' && controlCodes.includes(el)) return true;
    else return false;
  }

}

console.log(transform([ '1', '--discrard-prev', true ]));
// console.log(transform([1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5]));

module.exports = {
  transform
};






 // console.log(arr);
  // debugger
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  // if(!Array.isArray(arr)) {
  //   throw new Error("'arr' parameter must be an instance of the Array!");
  // }

  // let arrCopy=[...arr];

  // let rez = [];

  // for(let i = 0; i < arr.length; i++){
  //   //let el = arrCopy[i];

  //   if(typeof el == 'string' && el[0] == '-' && el[1]=='-'){
  //     let tmpArray=el.split('-');
  //     let command = tmpArray[2];
  //     let indexText = tmpArray[3];

  //     if(command=='discard') {
  //       if(indexText=='next') {
  //         if (i==arr.length-1) continue;
  //         delete(arrCopy[i+1]);
  //         i = i+1;
  //       }
  //       else {//previous
  //         if(i==0) continue;
  //         if(arrCopy[i-1] === undefined) continue;
  //         rez.pop();
  //       };
  //     }
  //     else{//double
  //       if(indexText=='next') {
  //         if (i==arr.length-1) continue;
  //         rez.push(arr[i+1]);
  //       }
  //       else {//previous
  //         if(i==0) continue;
  //         if(arrCopy[i-1] !== undefined) rez.push(arr[i-1]);
  //       }
  //     }
  //   }
  //   else{
  //     if(el !== undefined) rez.push(el);
  //   }
  // }

  // return rez;