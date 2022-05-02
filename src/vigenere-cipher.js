const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  encrypt(message, key) {
    if(message === undefined || key === undefined) {
      throw Error('Incorrect arguments!');
    }
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.setKeyArray(key);
    this.setMessageArray(message);

    this.messageArray.forEach((l, index)=>{
      //console.log(l,index)
      if(this.encodedIndexes.includes(index)) {
        this.messageArray[index] = this.encodeLetterNumber(l, this.encodedIndexes.indexOf(index));
        //console.log('encoded:'+this.messageArray[index]);
        this.messageArray[index] = this.alphabetArray[this.messageArray[index]];
      }
    });

    let result;

    if(this.direct) result = this.messageArray.join('');
    else result = this.messageArray.reverse().join('');
    
    this.clearData();

    return result;
    
  }

  decrypt(message, key) {
    if(message === undefined || key === undefined) {
      throw Error('Incorrect arguments!');
    }
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.setKeyArray(key);
    this.setMessageArray(message);

    this.messageArray.forEach((l, index)=>{
      //console.log(l,index)
      if(this.encodedIndexes.includes(index)) {
        this.messageArray[index] = this.decodeLetterNumber(l, this.encodedIndexes.indexOf(index));
        //console.log('encoded:'+this.messageArray[index]);
        this.messageArray[index] = this.alphabetArray[this.messageArray[index]];
      }
    });

    let result;

    if(this.direct) result = this.messageArray.join('');
    else result = this.messageArray.reverse().join('');

    this.clearData();

    return result;
  }

  encodeLetterNumber(letterNumber, index){
    let codeLength = this.keyArray.length;
    let keyIndex;
    
    if(index<codeLength) keyIndex = index;
    else keyIndex = index % codeLength;

    let newLetterNumber = letterNumber + this.keyArray[keyIndex];
    if(newLetterNumber>25) newLetterNumber = newLetterNumber - 26;

    return newLetterNumber;
  }

  decodeLetterNumber(letterNumber, index){
    //console.log(letterNumber, index);
    let codeLength = this.keyArray.length;
    let keyIndex;

    if(index<codeLength) keyIndex = index;
    else keyIndex = index % codeLength;

    let newLetterNumber = letterNumber - this.keyArray[keyIndex];
    if(newLetterNumber<0) newLetterNumber = newLetterNumber + 26;
    //console.log('new'+newLetterNumber);
    return newLetterNumber;
  }

  getCodeForMessageLetters(l, index) {
    let lEncoded = this.alphabetArray.indexOf(l);
    if(lEncoded>=0) {
      this.encodedIndexes.push(index);
      return lEncoded;
    }
    else{
      return l;
    }
  }

  setMessageArray(message){
    message.toUpperCase().split('').forEach((l, index)=>{
      this.messageArray.push(this.getCodeForMessageLetters(l, index));
    });
    //console.log(this.messageArray)
  }

  setKeyArray(key){
    key.toUpperCase().split('').forEach(letter => {
      this.keyArray.push(this.alphabetArray.indexOf(letter));
    });
    //console.log(this.keyArray);
  }

  clearData(){
    this.keyArray=[];
    this.messageArray=[];
    this.encodedIndexes=[];
  }

  constructor(start = true){
    this.direct = start;
    this.alphabetArray=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    this.keyArray=[];
    this.messageArray=[];
    this.encodedIndexes=[];

  }
}

let v = new VigenereCipheringMachine(false);
//v.encrypt('attack at dawn!', 'alphonse') // => 'AEIHQX SX DLLU!'
// * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA' 
// * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'

// console.log(v.encrypt('attack at dawn!', 'alphonse')); //
// console.log(v.decrypt('AEIHQX SX DLLU!', 'alphonse')); //

module.exports = {
  VigenereCipheringMachine
};
