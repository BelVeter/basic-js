const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let rezDomainsObj = {};
  
  domains.forEach((el) => {
    splitDomain(el);
  });

  return rezDomainsObj;

  function splitDomain(domain) {
    let domainArray = domain.split('.'); 
    domainArray.reverse();
    domainArray.forEach((element, index) => {
      if(index===0) domainArray[index] = '.'+domainArray[index];
      else{
        domainArray[index] = domainArray[index-1]+'.'+domainArray[index];
      }      
    });

    domainArray.forEach(element => {
      if(rezDomainsObj[element]===undefined) {
        rezDomainsObj[element]= 1;
      }
      else{
        rezDomainsObj[element] += 1;
      }
    });
    //console.log(rezDomainsObj);
  }
}

domains = [
    'code.yandex.ru',
    'music.yandex.ru',
    'yandex.ru'
   ];

//console.log(getDNSStats(domains));

module.exports = {
  getDNSStats
};
