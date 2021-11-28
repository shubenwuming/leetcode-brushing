/**
 * 题号：20
 * 题目地址：https://leetcode-cn.com/problems/valid-parentheses/
 * 有效字符串需满足：
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 */

/**
 * @param {string} s
 * @return {boolean}
 */

const isValid = function (s) {
  // 如果左右括号数总数为奇数,说明肯定不是有有效括号
  if(s.length % 2 !== 0) return false

  // 用栈，后遇到的左括号用先闭合, 符合后进先出
  const stack = []

  // 左右括号对应,描述闭合关系
  const hashMap = new Map([
    [')', '('],
    [']', '['],
    ['}', '{']
  ])

  // 遍历传入字符， 遇到左括号压栈，遇到右括号，若栈为空，则返回false, 若栈顶元素不是对应左括号，返回false
  for(let val of s) {
    // if 里面是遇见右括号， esle 里是遇见左括号
    if(hashMap.has(val)) {
      // 遇见右括号，栈为空，返回false
      if(stack.length < 0) return false
      // 栈不为空，出栈，若不是有效闭合，返回false
      const left = stack.pop()
      if(left !== hashMap.get(val)) return false
    } else { 
      // 遇见左括号,进栈
      stack.push(val)
    }
  }

  // 遍历结束后，栈不为空则说明不是有有效括号，为空则说明是有有效括号
  return stack.length === 0
}