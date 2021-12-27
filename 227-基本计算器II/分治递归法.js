/**
 * 题号：227
 * 题目地址：https://leetcode-cn.com/problems/basic-calculator-ii/
 */



/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  return calc(s, 0, s.length - 1);
}

function calc(s, l, r) {
  // pos:记录优先级最低运算符位置 pri: 记录优先级最低运算符的优先级 curPri: 当前运算符的优先级
  let pos = -1, pri = 10000 -1, curPri
  for(let i = l; i < r + 1; i++) {
    curPri = 10000

    switch(s[i]) {
      case '+': 
      case '-': curPri = 1; break;
      case '*': 
      case '/': curPri = 2; break;
    }

    if(pri >= curPri) {
      pos = i;
      pri = curPri;
    }
    
  }

  if(pos === -1) {
    let num = 0;

    for(let i = l; i < r + 1; i++) {
      if(/0-9/.test(s[i])) num = num * 10 + (+s[i]);
    }

    return num;
  }

  const a = calc(s, l, pos - 1);
  const b = calc(s, pos + 1, r);

  switch(s[pos]) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return a / b;
  }

}