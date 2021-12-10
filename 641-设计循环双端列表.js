/**
 * 题号：641
 * 题目地址：https://leetcode-cn.com/problems/design-circular-deque/
 */


/**
 * @param {number} k
 */
var MyCircularDeque = function(k) {
  // 队列申请到空间的最大容量
  this.max = k
  // 头
  this.front = 0
  // 尾的后一位,  设计的是这种[front, rear)
  this.rear = 0
  // 队列申请到的空间
  this.queue = new Array(k).fill(null)
}

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function(value) {
  // 如果队列满了，插入失败
  if(this.isFull()) return false

  // 否则front指针向前移动一位，但是要考虑front 在 0 的位置时
  this.front = this.front === 0 ? this.max - 1 : this.front - 1

  // 插入
  this.queue[this.front] = value

  // 插入成功
  return true
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function(value) {
  // 如果队列满了，插入失败
  if(this.isFull()) return false

  // 插入
  this.queue[this.rear] = value

  // 后移
  // this.rear = this.rear === this.max - 1 ? 0 : this.rear + 1
  this.rear = (this.rear + 1) % this.max

  // 插入成功
  return true
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function() {
  // 判空，删除失败
  if(this.isEmpty()) return false
  // 删除
  this.queue[this.front] = null
  // 指针后移
  this.front = (this.front + 1) % this.max
  // 删除成功
  return true
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function() {
  // 判空，删除失败
  if(this.isEmpty()) return false

  // 指针后移
  this.rear = this.rear === 0 ? this.max - 1 : this.rear - 1
  
  // 删除
  this.queue[this.rear] = null

  // 删除成功
  return true

};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function() {
  // 判空
  if(this.isEmpty()) return -1
  // 返回
  return this.queue[this.front]
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function() {
  // 判空
  if(this.isEmpty()) return -1
  // rear 指的是 尾的前一位， 当指向0 时实际指向尾
  return this.queue[this.rear === 0 ? this.max - 1 : this.rear -1]
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function() {
  // front 和 rear 指向同一个位置，并且此位置上的元素是 null
  return (this.front === this.rear) && (this.queue[this.front] === null)
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function() {
  // front 和 rear 指向同一个位置，并且此位置上的元素不是 null
  return (this.front === this.rear) && (this.queue[this.front] !== null)
};

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */