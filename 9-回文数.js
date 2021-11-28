 /**
  * 题号：回文数
  * 题目地址：https://leetcode-cn.com/problems/palindrome-number/
  */

// 字符串
const isPalindrome = function(x) {
  // 负数以及10的倍数一定不是回文数
  if(x < 0 || x % 10 === 0 && x !== 0) return false
  // 反转前
  const reverseBefore = x.toString()
  // 反转后
  let reverseAfter = ''
  // 倒序遍历
  for(let i = reverseBefore.length - 1; i >= 0; i--) {
    reverseAfter += reverseBefore[i]
  }
  // 返回比较结果
  return reverseBefore === reverseAfter
}

// 数字
const isPalindrome = function(x) {
  // 负数 10的倍数一定不是回文数
  if(x < 0 || x % 10 === 0 && x !== 0) return false
  // 前一半，后一半反转对比
  let halfBefore = x
  let halfAfter = 0
  while(halfBefore > halfAfter) {
    halfAfter = halfAfter * 10 + halfBefore % 10
    halfBefore = Math.floor(halfBefore / 10)
  }
  // 数字长度为奇数时，去掉中间的那个数再比较
  return halfBefore === halfAfter || halfBefore === Math.floor(halfAfter / 10)
}

