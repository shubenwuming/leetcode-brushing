/**
 * 题号：933
 * 题目地址：https://leetcode-cn.com/problems/number-of-recent-calls/
 */


 var RecentCounter = function() {
  this.arr = []
};

/** 
 * @param {number} t
 * @return {number}
 */
// 写法一（错误）：
/* RecentCounter.prototype.ping = function(t) {
  this.arr.push(t)
  for(let i = 0; i < this.arr.length; ++i) {
    if(this.arr[i] < t - 3000) {
      this.arr.shift()
      // i--
    } else{
      break
    }
  }
  return this.arr.length
}; */

// 写法一
/* RecentCounter.prototype.ping = function(t) {
  this.arr.push(t)
  for(let i = 0; i < this.arr.length; ++i) {
    if(this.arr[i] < t - 3000) {
      this.arr.shift()
      i--
    } else{
      break
    }
  }
  return this.arr.length
}; */

// 写法二（不容易错）
RecentCounter.prototype.ping = function(t) {
  this.arr.push(t)
  while(t - this.arr[0] > 3000) {
    this.arr.shift()
  }
  return this.arr.length
};


/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */