/**
 * 题号：331
 * 题目描述：https://leetcode-cn.com/problems/verify-preorder-serialization-of-a-binary-tree/
 */

/**
 * @param {string} preorder
 * @return {boolean}
 */
const isValidSerialization = function(preorder) {
  // 初始化栈, 初始化为1，可减少一些边界判断
  const stack = [1]
  // 将字符串转换成数组，直接遍历字符串可能会遇见‘92’这种多位数，也是为了减少一些边界,当然也可以直接遍历字符串，遇到数字，还要继续遍历直到找到‘,’号
  const preorderArr = preorder.split(',')

  // 遍历上面转换的数组
  for(let i = 0; i < preorderArr.length; ++i) {
    // 还没遍历完数组，栈为空时，代表这是错误的序列化
    if(!stack.length) return false

    // 遇见#号，栈顶元素-1，遇见非#号，栈顶元素-1，再入栈2。   注意这期间如果栈顶为0时，需要出栈
    if(preorderArr[i] === '#') {
      // 栈顶-1
      stack[stack.length - 1]--
      // 栈顶-1后判断栈顶是否为0，为0出栈
      (stack[stack.length - 1] === 0)  && stack.pop()
    } else {
      // 栈顶-1
      stack[stack.length - 1]--
      // 栈顶-1后判断栈顶是否为0，为0出栈
      (stack[stack.length - 1] === 0) && stack.pop()
      // 入栈2
      stack.push(2)
    }
  }

  // 遍历处理后，栈为空，代表时正确的二叉树前序序列
  return !stack.length
}