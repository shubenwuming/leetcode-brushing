/**
 * 题号：969
 * 题目地址：https://leetcode-cn.com/problems/pancake-sorting/
 */

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var pancakeSort = function(arr) {
  // 翻转结果
  const retArr = []
  // 用于记录数组剩余部分末尾下标
  let len = arr.length

  // 在数组剩余部分找到最大值，先放到数组的头部，再放到数组剩余部分的末尾
  // 每次至少记录一个翻转位置
  while(len - 1) {
    // 本次最大值下标
    const maxIndex = getMaxIndex(arr, len)

    // 第一次翻转，如果已经在头不需要经过此次翻转
    if(maxIndex !== 0) {
      // 翻转
      reverse(arr, 0, maxIndex)
      // 记录翻转位置
      retArr.push(maxIndex + 1)
    } 

    // 第二次翻转
    reverse(arr, 0, len - 1)
    // 记录翻转位置
    retArr.push(len)

    // 进入下次迭代
    len--
  }

  return retArr
};


/**
 * 该函数用来找数组中 索引小于等于index中 的最小值
 * @param1 number[]
 * @param2 num
 * @return num
 */
function getMaxIndex(arr, index) {
  let maxIndex = 0
  for(let i = 0; i < index; ++i) {
    if(arr[maxIndex] >= arr[i]) continue
    maxIndex = i
  }

  return maxIndex
}

/**
 * 数组部分元素翻转
 * @params1  number[]
 * @params2  number
 * @params1  number
 */
function reverse(arr, start, end) {
  while(start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]]
    start++
    end--
  }
}