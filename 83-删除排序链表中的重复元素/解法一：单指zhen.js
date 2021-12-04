/**
 * 题号：83
 * leetcode地址：https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/
 * 题目描述：
 * 存在一个按升序排列的链表，给你这个链表的头节点 head ，请你删除所有重复的元素，使每个元素 只出现一次 。
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


// cur指针遍历链表，与cur的下一节点比较，重复，则删下个节点
const deleteDuplicates = function(head) {
  // 空链表、只用一个节点的链表不用处理
  if(head === null || head.next === null) return head

  // cur指针遍历链表用
  let cur = head

  // 遍历到尾节点
  while(cur.next) {
    // cur 与 cur.next 比， 重复则删除cur.next, 不重复则进行下次遍历
    if(cur.val === cur.next.val) {
      cur.next = cur.next.next
    } else {
      cur = cur.next
    }
  }

  return head
}