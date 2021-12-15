/**
 * 题号：844
 * 题目地址：https://leetcode-cn.com/problems/backspace-string-compare/
 */


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
  // 数组模拟栈，
  const sArr = []
  const tArr = []

  // 遍历字符串s
  for(const val of s) {
    // 处理字符串s 存入栈中
    transform(val, sArr)
  }

  // 遍历字符串t
  for(const val of t) {
    // 处理字符串t 存入栈中
    transform(val, tArr)
  }

  // 如果栈的size不相等，说明两个字符串肯定不相等
  if(sArr.length !== tArr.length) return false

  // 如果栈的size不相等，比较每个位置的子串是否相等 
  for(let key in sArr) {
    if (sArr[key] === tArr[key]) continue
    return false
  }
  // 相同位置的字串都相等，说明两个字符串相等
  return true
};

/**
 * @param {string} s
 * @param {string[]} arr
 * @return void
 */
function transform(s, arr) {
  if(s !== '#') {
    arr.push(s)
  } else {
    arr.pop()
  }
}