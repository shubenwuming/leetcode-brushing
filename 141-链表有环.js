 /**
  * 题号： 141题
  * 题目地址：https://leetcode-cn.com/problems/linked-list-cycle/
  */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
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