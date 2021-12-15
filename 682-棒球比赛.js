/**
 * 题号：682
 * 题目地址：https://leetcode-cn.com/problems/baseball-game/
 */

/**
 * @param {string[]} ops
 * @return {number}
 */
 var calPoints = function(ops) {
  //  栈，得分记录
  const stack = []

  for(const val of ops) {
    switch(val) {
      // "+" - 表示本回合新获得的得分是前两次得分的总和。题目数据保证记录此操作时前面总是存在两个有效的分数。
      case '+': 
        stack.push(+stack[stack.length - 1] + +stack[stack.length - 2])
        break
      // "D" - 表示本回合新获得的得分是前一次得分的两倍。题目数据保证记录此操作时前面总是存在一个有效的分数。
      case 'D':
        stack.push(stack[stack.length - 1] * 2)
        break
      // "C" - 表示前一次得分无效，将其从记录中移除。题目数据保证记录此操作时前面总是存在一个有效的分数。
      case 'C':
        stack.pop()
        break
      // 整数 x - 表示本回合新获得分数 x
      default:
        stack.push(+val)
    }
  }
  // 累加栈中得分记录
  return stack.reduce((init, item) => init + item,0)
};