 /**
  * 题号：回文数
  * 题目地址：https://leetcode-cn.com/problems/palindrome-number/
  */

// 字符串
let isPalindrome= function (x) {
  let strNum = x.toString();
  let reverseStrNum = '';
  for (let i = strNum.length - 1; i >= 0; i--) {
    reverseStrNum += strNum[i];
  }
  return strNum === reverseStrNum;
}

// 数字
var isPalindrome = function(x) {
  if(x < 0 || x % 10 === 0 && x !==0) return false;
  let y = 0;
  while(x > y) {
    y = y * 10 + x % 10;
    x = Math.floor(x / 10);
  }
  console.log(x, y);
  return x === y || x === Math.floor(y / 10);
};

