/**
 * 题号：703
 * 题目地址：https://leetcode-cn.com/problems/kth-largest-element-in-a-stream/
 * 题目简单描述：
 * 设计一个找到数据流中第 k 大元素的类（class）。注意是排序后的第 k 大元素，不是第 k 个不同的元素。

    请实现 KthLargest 类：

    KthLargest(int k, int[] nums) 使用整数 k 和整数流 nums 初始化对象。
    int add(int val) 将 val 插入数据流 nums 后，返回当前数据流中第 k 大的元素。
 */

// 找前k大元素，放在最下堆里，取根节点的值
// 借助最小堆（经过排序的完全二叉树，非终端节点的值不大于其左右子节点的值）

// 最小堆实现，用数组模拟实现
class MinHeap {
  constructor(data = []) {
    // 数据初始化
    this.data = data
    // 堆化
    this.heapify()
  }
  // 堆化
  heapify() {
    // 堆里元素少于2个，不需要堆化了
    if(this.size() < 2) return
    // 元素超过两个，遍历每个元素，调整位置使其变成最小堆（小值上移）
    for(let i = 1; i < this.size(); ++i) {
      // 小值上移
      smallUp(i)
    }
  }
  // 元素数量
  size() {
    return this.data.length
  }
  // 比较函数
  compare(a, b) {
    return a - b
  }
  // 交换
  swap(index1, index2) {
    [this.data[index1], this.data[index2]] = [this.data[index2], this.data[index1]]
  }
  // 小值上移 - 当前节点 与 父节点们 的值比较
  smallUp(index) {
    // 遍历，依次与父节点比较
    while (index > 0) {
      // 找当前节点的父节点， index - 1 >>> 1 等价于 Math.floor((index - 1) / 2)
      const parentIndex = (index - 1) >>> 1
      // 当前节点值小于父节点值，交换位置
      if(this.compare(this.data[index], this.data[parentIndex]) < 0) {
        // 交换
        this.swap(index, parentIndex)
        // 继续比较
        index = parentIndex
      } else {
        // 当前值大于父节点，停止
        break
      }
    }
  }

  // 堆插入节点到合适位置: 先插入到堆尾，然后符合比较条件上移
  insert(val) {
    // 插到堆尾
    this.data.push(val)
    // 小值上移
    this.smallUp(this.size() - 1)
  }

  // 删除堆节点，最小堆删除的是堆首，为保证原有结构不乱，将堆尾放到堆首，然后大值下移
  del() {
    // 如果堆为空, 返回
    if(this.size() === 0) return null
    // 不为空，删除堆尾，并将其放到堆首
    const last = this.data.pop()
    this.data[0] =  last

    // 刚才有删除操作，堆元素少于2，则不需要下移
    if(this.size() < 2) return last

    // 大值下移
    this.bigDown(0)

    return last
  }

  // 大值下移
  bigDown(index) {
    // 此变量记录最终交换的下标
    let findIndex = index
    // 先写一个死循环，没有交换则代表下沉结束
    while (true) {
      // 左子节点下标
      const leftIndex = findIndex * 2 + 1
      // 右子节点下标
      const rightIndex = leftIndex + 1
      // 先与左子节点比，
      if(leftIndex < this.size() && this.compare(this.data[leftIndex], this.data[findIndex]) < 0) {
        findIndex = leftIndex
      }
      // 再与右子节点比，
      if(rightIndex < this.size() && this.compare(this.data[rightIndex], this.data[findIndex]) < 0) {
        findIndex = rightIndex
      }
      // 若发生交换
      if(findIndex !== index) {
        // 交换
        this.swap(findIndex, index)
        // 交换后继续下沉
        index = findIndex
      } else {
        // 未发生交换则停止
        break
      }
    }
  }
  
  // 堆顶元素
  peek() {
    if(this.size() === 0) return null
    return this.data[0]
  }


}



/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
  this.k = k
  this.minHeap = new MinHeap()
  for(let num of nums) {
    this.add(num)
  }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
  this.minHeap.insert(val)
  if(this.minHeap.size() > this.k) {
    this.minHeap.del()
  }

  return this.minHeap.peek()
 
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */