 /**
  * 题号：202
  * 题目地址：https://leetcode-cn.com/problems/happy-number/
  */


/**
 * @param {number} n
 * @return {boolean}
 */
 var isHappy = function(n) {
  let s = n;
  let f = n;

 while(f !== 1 && getSquareSum(f) !== 1) {
    s = getSquareSum(s);
    f = getSquareSum(getSquareSum(f));
    if(s === f) return false;
  }
  
  return true;
};

function getSquareSum(n) {
  let res = 0;
  while(n) {
    res += (n % 10) ** 2
    n = Math.floor(n / 10)
  }
  return res;
}