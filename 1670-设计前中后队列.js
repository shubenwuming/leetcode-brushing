/**
 * 题号：1670
 * 题目地址：https://leetcode-cn.com/problems/design-front-middle-back-queue/
 */

/**
 * 说明：
 * 其实JavaScript的数组模拟很简单。因为JavaScript数组本身就支持前中后的操作，在网上看到了很多用两个数组来模拟实现的，我觉得一个数组就能实现。。。
 * 这里我将用两个循环双端队列实现前中后队列，性能好点
 * 循环双端队列我将用双链表实现
 */

// 链表节点类
class Node {
  constructor(val = 0, next = null, pre = null) {
    this.val = val
    this.next = next
    this.pre = pre
  }
  // 当前节点前插入节点
  insertBefore(node) {
    // 插入操作先处理待插入节点，最后处理当前节点
    node.pre = this.pre
    node.next = this
    if(this.pre) this.pre.next = node
    this.pre = node 
  }
  // 当前节点后插入节点
  insertAfter(node) {
    // 插入操作先处理待插入节点，最后处理当前节点
    node.pre = this
    node.next = this.next
    if(this.next) this.next.pre = node
    this.next = node
  }
  // 删除当前节点前一个节点
  deleteBefore() {
    if(this.pre) {
      this.pre = this.pre.pre
      if(this.pre) this.pre.next = this
    }
  }

  // 删除当前节点后一个节点
  deleteAfter() {
    if(this.next) {
      this.next = this.next.next
      if(this.next) this.next.pre = this
    }
  }
}

// 循环双端队列
class CircularDoubleEndQueue {
  constructor() {
    this.count = 0
    // 虚头
    this.dummyHead = new Node()
    // 虚尾
    this.dummyTail = new Node()
    // 初始时，虚头指向虚尾
    this.dummyHead.next = this.dummyTail
    this.dummyTail.pre = this.dummyHead
  }

  // 队首增
  pushFront(val) {
    this.dummyHead.insertAfter(new Node(val))
    this.count++
  }
  
  // 队尾增
  pushBack(val) {
    this.dummyTail.insertBefore(new Node(val))
    this.count++
  }

  // 队首删
  popFront() {
    // 队列为空
    if(this.isEmpty()) return -1
    // 保存删除节点值
    const ret = this.dummyHead.next.val

    // 删除
    this.dummyHead.deleteAfter()
    this.count--

    return ret
  }


  // 队尾删
  popBack(val) {
    // 队列为空
    if(this.isEmpty()) return -1
    // 保存删除节点值
    const ret = this.dummyTail.pre.val

    // 删除
    this.dummyTail.deleteBefore()
    this.count--

    return ret
  }

  // 判空
  isEmpty() {
    // this.count === 0
    // this.dummyTail.pre === this.dummyHead
    return this.dummyHead.next === this.dummyTail
  }
}


// ********************* 有了前面的铺垫，现在开始实现前中后队列 ***************************



var FrontMiddleBackQueue = function() {
  // 初始化两个循环双端队列
  this.leftQue = new CircularDoubleEndQueue()
  this.rightQue = new CircularDoubleEndQueue()
};

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushFront = function(val) {
  // 前增
  this.leftQue.pushFront(val)
  // 增后可能leftQue.count > rightQue.count
  if(this.leftQue.count > this.rightQue.count) this.rightQue.pushFront(this.leftQue.popBack())
};

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushMiddle = function(val) {
  // 中增分情况，当leftQue.count = rightQue.count 右队列首增；leftQue.count < rightQue.count 左队列尾增， 这两种情况都满足 leftQue.count < rightQue.count - 1, 故不需要处理
  if(this.leftQue.count === this.rightQue.count) {
    this.rightQue.pushFront(val)
  } else {
    this.leftQue.pushBack(val)
  }
};

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushBack = function(val) {
  // 尾增
  this.rightQue.pushBack(val)
  // 增后this.leftQue.count < this.rightQue.count - 1
  if(this.leftQue.count < this.rightQue.count - 1) this.leftQue.pushBack(this.rightQue.popFront())
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popFront = function() {
  // 左队列右队列都为空，返回-1
  if(this.rightQue.isEmpty()) return -1
  // 右队列不为空，左队列为空，右队列首出队
  if(this.leftQue.isEmpty()) return this.rightQue.popFront()

  // 左右都不为空，左队列首出队，出对后可能this.leftQue.count < this.rightQue.count - 1
  let ret = this.leftQue.popFront()
  if(this.leftQue.count < this.rightQue.count - 1) this.leftQue.pushBack(this.rightQue.popFront())
  return ret
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popMiddle = function() {
  // 左队列右队列都为空，返回-1
  if(this.rightQue.isEmpty()) return -1
  // 左队列元素数量 等于 右队列元素数量 左队列尾出队
  if(this.leftQue.count === this.rightQue.count) return this.leftQue.popBack()
  // 左队列小于右队列数，右队列首出队
  return this.rightQue.popFront()
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popBack = function() {
  // 左队列右队列都为空，返回-1
  if(this.rightQue.isEmpty()) return -1
  // 右队列不为空，右队列尾出队
  let ret = this.rightQue.popBack()
  // 右队列尾出对后，可能this.leftQue.count > this.rightQue.count
  if(this.leftQue.count > this.rightQue.count) this.rightQue.pushFront(this.leftQue.popBack())
  return ret
};

/**
 * Your FrontMiddleBackQueue object will be instantiated and called as such:
 * var obj = new FrontMiddleBackQueue()
 * obj.pushFront(val)
 * obj.pushMiddle(val)
 * obj.pushBack(val)
 * var param_4 = obj.popFront()
 * var param_5 = obj.popMiddle()
 * var param_6 = obj.popBack()
 */
