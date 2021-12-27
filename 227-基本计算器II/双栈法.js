/**
 * 题号：227
 * 题目地址：https://leetcode-cn.com/problems/basic-calculator-ii/
 */



/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  // 补一个优先级最低的操作符，会直接清空操作符栈，得到最终结果。
  s+='@';
  // 操作数栈
  const numStack = [];
  // 操作符栈
  const opsStack = [];
  // 遍历s
  for(let i = 0, n = 0; i < s.length; i++) {
    // 空白符不处理
    if(/\s/.test(s[i])) continue;
    // 处理数字,举个例子 遇见'123'
    if(/[0-9]/.test(s[i])) {
      n = n * 10 + (+s[i]);
      continue;
    }

    // ********************* 代码到了这里说明当前字符是操作符 ***************************

    // 将数字压栈
    numStack.push(n);
    // 初始化数字
    n = 0;
    // 找出 操作符栈 中 比 当前操作符优先级低的操作符, 计算并将计算结果放入操作数栈中
    while(opsStack.length && level(opsStack[opsStack.length - 1]) >= level(s[i])) {
      const b = numStack.pop();
      const a = numStack.pop();
      const ops = opsStack.pop();
      const num = calc(a, b, ops);
      numStack.push(num);
    }
    // 当前操作符压栈
    opsStack.push(s[i]);
  }
  // 由于最后一个操作符是@优先级最低,所以相当于我们已经清空了操作符栈,直接返回操作数栈中的栈顶元素即是计算结果
  return numStack.pop();
};

/**
 * @params 操作符
 * @return 操作符对应的优先级
 */
function level(ops) {
  switch(ops) {
    case '+':
    case '-': return 1
    case '*':
    case '/': return 2
    case '@': return -1
  }
}

/**
 * @params 数字，数字，操作符
 * @return 计算后得到的值
 */
function calc(a,b,ops) {
  switch(ops) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return Math.floor(a / b);
  }
}


