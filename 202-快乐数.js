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
  do {
    s = getSquareSum(s);
    f = getSquareSum(getSquareSum(f));
    if(f == 1) return true;
  } while(s !== f && f !== 1)
  return false;
};

function getSquareSum(n) {
  let res = 0;
  while(n) {
    res += (n % 10) ** 2
    n = Math.floor(n / 10)
  }
  return res;
}