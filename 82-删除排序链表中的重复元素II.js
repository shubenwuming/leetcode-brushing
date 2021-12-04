/**
 * 题号：82
 * leetcode地址：https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii/
 * 题目描述：
 * 存在一个按升序排列的链表，给你这个链表的头节点 head ，请你删除链表中所有存在数字重复情况的节点，只保留原始链表中 没有重复出现 的数字。
 * 返回同样按升序排列的结果链表。
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */


// cur 待处理节点前一个节点， 
// cur.next 待处理节点
// cur.next.next 待处理节点下一节点
const deleteDuplicates = function(head) {
  // 虚头，因需要操作头节点的前一个节点
  let dummy = new ListNode(-1, head)

  // cur 指向待处理节点前一个节点
  let cur = dummy

  while(cur.next && cur.next.next) {
    // 待处理节点 与 待处理下一节点比较
    if(cur.next.val !== cur.next.next.val) {
      // 不相等，待处理节点前一节点往后移一位
      cur = cur.next
    } else {
      // 相等，记录待处理节点值
      let val = cur.next.val

      // 找到不相等的节点,相等的节点删掉
      while(cur.next  && cur.next.val === val ) {
        cur.next = cur.next.next
      }
    }
  }

  return dummy.next
}