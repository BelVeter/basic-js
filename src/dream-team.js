const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {  /* members */
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  if (!Array.isArray(members)) return false;

  let correctArray = members.filter((item) => {
    return typeof item == 'string';
  });

  if (correctArray.length == 0) return false;

  let rez = [];
  correctArray.forEach((el) => {
    let i=0;
    
    while(el[i]==' ') i++;

    rez.push(el[i].toUpperCase());
  });

  rez.sort();

  return rez.join('');

}

module.exports = {
  createDreamTeam
};
