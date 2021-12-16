/**
 * 题号：1021
 * 题目地址：https://leetcode-cn.com/problems/remove-outermost-parentheses/
 */

/**
 * @param {string} s
 * @return {string}
 */
const removeOuterParentheses = function(s) {
  // cnt计数, cnt初始为0
  let cnt = 0
  // ret保存 删除最外层括号后的结果， 初始化为''
  let ret = ''
  // 遍历传入字符串
  for(const val of s) {
    if(val === '(' ) {
      // 遇见左括号cnt+1
      cnt++
      // 若cnt>1时，说明此左括号不是最外层括号，故将其拼接到ret上
      cnt > 1 && (ret += val)
    } else {
      // 遇见右括号cnt-1
      cnt--
      // 若cnt>0时，说明此右括号不是最外层括号，故将其拼接到ret上
      cnt > 0 && (ret += val)
    }
  }
  // 返回ret
  return ret
};