/**
 * 题号：946
 * 题目地址：https://leetcode-cn.com/problems/validate-stack-sequences/
 */

/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
const validateStackSequences = function(pushed, poped) {
  // 栈
  const stack = []
  // 该指针指向poped序列未处理头
  let popedIndex = 0

  // 遍历pushed序列
  for(const item of pushed) {
    // 将pushed序列中的元素入栈
    stack.push(item)
    // 检查poped序列中的元素是否与stack栈的栈顶相等，相等指针后移
    while(stack[stack.length - 1] === poped[popedIndex] && stack.length) {
      // 处理poped序列的下一项
      popedIndex++
      // 出栈
      stack.pop()
    }
  }
  // 遍历完后，若stack栈内还有元素返回false, 否则返回true
  return !stack.length
}