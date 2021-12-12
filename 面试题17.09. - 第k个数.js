/**
 * 题号：面试题17.09.
 * 题目描述：https://leetcode-cn.com/problems/get-kth-magic-number-lcci/
 */

/**
 * @param {number} k
 * @return {number}
 */
 var getKthMagicNumber = function(k) {
  // 初始化数组
  let arr = [1]
  // 3指针，指向数组下标
  let p3 = 0, p5 = 0, p7 = 0
  // 返回值
  let ret = 1
  // 由于只需要返回第k个合规数，所以我们的迭代继续条件是数组长度小于k
  while(arr.length < k) {
    // 找出最小值
    const v3 = arr[p3] * 3
    const v5 = arr[p5] * 5
    const v7 = arr[p7] * 7
    ret = getMin(v3, v5, v7)
    // 将最小值push进数组
    arr.push(ret)
   
    // 指针后移，为什么不用else if，去重
    if(ret === v3) {
      p3++
    } 
    if(ret === v5) {
      p5++
    }
    if(ret === v7) {
      p7++
    }
  }
  return ret
};

function getMin() {
  return Math.min.apply(null, arguments)
}