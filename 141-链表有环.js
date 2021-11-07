 /**
  * 题号： 141题
  * 题目地址：https://leetcode-cn.com/problems/linked-list-cycle/
  */

//  快慢指针

  var hasCycle = function(head) {
    let fast = head;
    let slow = head;
    while(fast && fast.next) {
      fast = fast.next.next;
      slow = slow.next;
      if(fast === slow) {
        return true;
      }
    }
    return false;
  };