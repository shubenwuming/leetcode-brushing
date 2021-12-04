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

// 两个指针:  pre指向未处理头，cur遍历用。
const deleteDuplicates = function(head) {
  // 空链表、只有一个节点的链表不需要处理
  if(head === null || head.next === null) return head

  // pre指向未处理头， cur遍历用
  let pre = head, cur = head.next

  while(cur) {
    // 相等后移，注意cur后移到null了需要单独处理
    if(pre.val === cur.val) {
      cur = cur.next
      // 单独处理
      if(cur === null) pre.next = cur
    } else {
      // 不相等，则删除重复节点，然后pre指向cur,cur后移（下面三行代码分别干的活）
      pre.next = cur
      pre = cur
      cur = cur.next
    }
  }

  return head
}