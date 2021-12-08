/**
 * 题号：622
 * 题目地址：https://leetcode-cn.com/problems/design-circular-queue/
 */

/**
 * @param {number} k
 */
 var MyCircularQueue = function(k) {
  // 头指针
  this.front = 0
  // 尾指针
  this.rear = 0
  // 队列长度
  this.max = k
  // 队列
  this.queue = Array(k).fill(null)
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
  // 判满返回false
  if(this.isFull()) return false

  // 先往队尾添加
  this.queue[this.rear] = value
  // 尾指针后移: 这个环有点像取余，比如队列长7，尾指针到了队尾，再加就是 (7+1) % 7
  this.rear = (this.rear + 1) % this.max

  return true
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
  // 判空返回false
  if(this.isEmpty()) return false

  // 队头出队
  this.queue[this.front] = null
  // 头指针后移
  this.front = (this.front + 1) % this.max

  return true
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
  // 队列为空，返回-1
  if(this.isEmpty()) return -1

  return this.queue[this.front]
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
  // 队列为空，返回-1
  if(this.isEmpty()) return -1

  return this.queue[this.rear === 0 ? this.max -1 : this.rear - 1]
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
  // 头指针、尾指针同时指向一个元素，且该元素为null
  return (this.front === this.rear) && (this.queue[this.front] === null)
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
  // 头指针、尾指针同时指向一个元素，且该元素不为null
  return (this.front === this.rear) && (this.queue[this.front] !== null)
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */