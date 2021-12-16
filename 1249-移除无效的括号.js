/**
 * 题号：1249
 * 题目地址：https://leetcode-cn.com/problems/minimum-remove-to-make-valid-parentheses/
 */


/**
 * @param {string} s
 * @return {string}
 */
const minRemoveToMakeValid = function(s) {
  // 保存该删除的左括号下标
  const delLeft = []
  // 保存该删除的右括号下标
  const delRight = []
  // 转字符串为数组
  const sArr = s.split('')
  // 遍历字符数组
  for(let i = 0; i < sArr.length; i++) {
    if(sArr[i] === '(') {
      // 遇见左括号，压入delLeft
      delLeft.push(i)
    }
    if(sArr[i] === ')') {
      if(delLeft.length) {
        // 遇见右括号，左括号栈的size大于0,出栈
        delLeft.pop()
      } else {
        // 遇见右括号，左括号栈的size等于0,压入right栈
        delRight.push(i)
      }
    }
  }
  // 遍历完后，合并该删除的左右括号
  const del = [...delLeft, ...delRight]
  // 遍历删除
  for(let i = 0; i < del.length; i++) {
    // sArr.splice(del[i], 1) ------ 错误代码，splice改变了原数组的长度，如果非要用，应该把del排个升序，然后从右往左遍历删
    sArr[del[i]] = ''
  }

  // 数组拼接
  return sArr.join('')

};