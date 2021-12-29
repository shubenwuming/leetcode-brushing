/**
 * 题号：1124
 * 题目地址：https://leetcode-cn.com/problems/longest-well-performing-interval/
 */


/**
 * @param {number[]} hours
 * @return {number}
 */
 const longestWPI = function(hours) {
  // 这里直接求前缀和数组，好处是少遍历一次，坏处是不好理解了。其实就是求映射和前缀和这两步的合并
  const preSum = new Array(hours.length + 1).fill(0);
  for(let i = 0; i < hours.length; ++i) {
    preSum[i+1] = hours[i] > 8 ? preSum[i] + 1 : preSum[i] - 1;
  }
  
  // 前缀和中依次递减元素的下标栈, 初始化最小元素是第0项
  const indexStack = [0]
  // 从左往右扫描前缀和数组, 存前缀和中符合要求元素的下标，由于已经初始化过，故从索引为1的元素往后扫描
  for(let i = 1; i < preSum.length; ++i) {
    if(preSum[i] < preSum[indexStack[indexStack.length - 1]]) indexStack.push(i)
  }
  
  // 区间最大结果,初始化为0
  let max = 0;
  // 从右往左扫描，找右边界最大
  for(let i = preSum.length - 1; i > max; --i) {
    while(preSum[i] > preSum[indexStack[indexStack.length - 1]]) {
      max = Math.max(max, i - indexStack.pop())
    }
  }
  return max
}