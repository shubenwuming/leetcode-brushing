/**
 * 题号：面试题03.04.
 * leetcode地址：https://leetcode-cn.com/problems/implement-queue-using-stacks-lcci/
 */

/**
 * 用数组模拟栈
 * 用两个栈来模拟队列
 * push栈 用来 模拟入队
 * pop栈 用来 模拟出队
 * 当pop栈为空时，需要把push栈内所有元素出栈，并入栈pop栈， 逆序过程以达到先进先出
 */


/**
 * Initialize your data structure here.
 */
 var MyQueue = function() {
  //  双栈
  this.pushStack = []
  this.popStack = []
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  // 入队的话，push栈入栈
  this.pushStack.push(x)
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  // 如果pop栈为空，需要把push栈内所有元素出栈，并入栈pop栈， 逆序过程
  if(!this.popStack.length) {
    while(this.pushStack.length) {
      this.popStack.push(this.pushStack.pop())
    }
  }

  // 出队的话，pop栈出栈
  return this.popStack.pop()
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  // 其实和出队差不多，返回队首 等价于 返回 pop栈的栈顶

  if(!this.popStack.length) {
    while(this.pushStack.length) {
      this.popStack.push(this.pushStack.pop())
    }
  }

  const peek = this.popStack.pop()
  this.popStack.push(peek)

  return peek
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  // 当push栈 和 pop栈都不为空，则此队列不为空
  return !this.pushStack.length && !this.popStack.length
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */