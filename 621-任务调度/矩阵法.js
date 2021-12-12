/**
 * 题号：621
 * 题目地址：https://leetcode-cn.com/problems/task-scheduler/
 */

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
 var leastInterval = function(tasks, n) {
  // 下标0-25 分别对应 A-Z
  const arr = new Array(26).fill(0)
  // 遍历tasks，统计每种任务出现的次数
  for(let i = 0; i < tasks.length; ++i) {
    arr[tasks[i].charCodeAt() - 'A'.charCodeAt()]++
  }

  // 统计 出现次数最多的任务  的  次数 （第一名）
  const maxTaskCount = Math.max.apply(null, arr)

  // 统计 几种 出现次数最多 的 任务 （有几个第一名）
  const maxTaskCountType = arr.filter(item => item === maxTaskCount).length

  // 冷却被填满，则返回任务总数，未被填满，则返回(maxTaskCount - 1) * (n + 1) + maxTaskCountType
  return Math.max(tasks.length, (maxTaskCount - 1) * (n + 1) + maxTaskCountType)

};