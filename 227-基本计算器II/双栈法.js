/**
 * 题号：227
 * 题目地址：https://leetcode-cn.com/problems/basic-calculator-ii/
 */



/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  s+='@';
  const numStack = [];
  const opsStack = [];
  for(let i = 0, n = 0; i < s.length; i++) {
    if(/\s/.test(s[i])) continue;
    if(/[0-9]/.test(s[i])) {
      n = n * 10 + (+s[i]);
      continue;
    }
    numStack.push(n);
    n = 0;
    while(opsStack.length && level(opsStack[opsStack.length - 1]) >= level(s[i])) {
      const b = numStack.pop();
      const a = numStack.pop();
      const ops = opsStack.pop();
      const num = calc(a, b, ops);
      numStack.push(num);
    }
    opsStack.push(s[i]);
  }
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


