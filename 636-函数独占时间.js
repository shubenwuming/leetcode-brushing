/**
 * 题号: 636
 * 题目地址: https://leetcode-cn.com/problems/exclusive-time-of-functions/
 */

/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function(n, logs) {
  // 栈,存函数id
  const idStack = [];
  // 结果数组, 索引对应函数id, 元素代表对应函数执行占用时间
  const res = new Array(n).fill(0);
  // 扫描日志数组
  for(let i = 0, preTimeStamp = 0; i < logs.length; ++i) {
    // 记录两个冒号':'的位置, 用于截取 函数id、函数所处状态、当前的时间点
    const pos1 = logs[i].indexOf(':');
    const pos2 = logs[i].lastIndexOf(':');

    // 截取函数id, 函数所处状态(开始、结束), 当前状态所处的时间点
    const id = logs[i].slice(0, pos1);
    const status = logs[i].slice(pos1 + 1, pos2);
    const timeStamp = +logs[i].slice(pos2 + 1);

    // 核心逻辑就是, 计算出的占用时间是加在当前函数,还是栈顶函数
    if(status === 'start') {
      // 状态是开始时, 函数栈非空,则计算出的占用时间属于函数栈 栈顶的函数
      if(idStack.length) res[idStack[idStack.length - 1]] += timeStamp - preTimeStamp
      idStack.push(id);
      preTimeStamp = timeStamp;
    } else {
      // 状态是结束时,计算出的独占时间属于当前函数
      res[id] += timeStamp - preTimeStamp + 1;
      idStack.pop();
      preTimeStamp = timeStamp + 1;
    }
  }
  return res;
};