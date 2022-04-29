const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if(date===undefined) return 'Unable to determine the time of year!';
  try{
    date.getMonth();
  }
  catch{
    throw new Error('Invalid date!');
  }

  let tmpDate = new Date;
  if(date.getMonth !== tmpDate.getMonth) {
    throw new Error('Invalid date!');
  }
  // remove line with error and write your code here

  let month = date.getMonth()+1;
  switch(month){
    case 3:
    case 4:
    case 5:
      return 'spring';
      break;
    case 6:
    case 7:
    case 8:
      return 'summer';
      break;
    case 9:
    case 10:
    case 11:
      return 'autumn';
      break;
    case 12:
    case 1:
    case 2:
      return 'winter';
      break;
  }

}

module.exports = {
  getSeason
};
