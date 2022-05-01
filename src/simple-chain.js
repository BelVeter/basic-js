const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],

  getLength() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.chain.length;
  },
  addLink(value) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let el;
    if(value!==undefined) {
      el = '( '+value+' )';
    }
    else{
      el = '( )';
    }
    
    this.chain.push(el);
    return this;
  },
  removeLink(position) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    if(isNaN(position) || (typeof position !== 'number') || !Number.isInteger(position) || position<1 || position> this.chain.length) {
      this.chain=[];
      throw new Error("You can't remove incorrect link!");
    }

    this.chain.splice(position-1,1);
    return this;
  },
  reverseChain() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.chain.reverse();
    return this;
  },
  finishChain() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let tmpChain = this.chain;
    this.chain=[];
    return tmpChain.join('~~');
  } 
};

//chainMaker.addLink(1).addLink(2).addLink(3).finishChain() => '( 1 )~~( 2 )~~( 3 )'
//chainMaker.addLink(1).addLink(2).removeLink(1).addLink(3).finishChain() => '( 2 )~~( 3 )'
//chainMaker.addLink(1).addLink(2).reverseChain().addLink(3).finishChain() => '( 2 )~~( 1 )~~( 3 )'

let rez = chainMaker.addLink(1).addLink(2).reverseChain().addLink(3).finishChain();

console.log(rez);

module.exports = {
  chainMaker
};
