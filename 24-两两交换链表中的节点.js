/**
 * 题号：24
 * leetcode地址：https://leetcode-cn.com/problems/swap-nodes-in-pairs/
 * 题目描述：给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）
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


const swapPairs = function (head) {
  // 空链表 、 只有一个节点的链表不需要交换
  if(head === null || head.next === null) return head

  // 虚拟头节点，需要操作头节点的前一个节点
  let dummy = new ListNode(-1, head)

  // 该指针每轮迭代都指向完成交换的尾部
  let pre = dummy

  // 迭代继续的条件，未交换节点数超过2
  while(pre.next && pre.next.next) {
    // first指向第一个节点、second指向第二个节点（这里的节点指即将两两交换的节点）
    let first = pre.next, second = pre.next.next
    
    // 接下来就是交换过程，三部走：second删、插

    // 删second
    first.next = second.next

    // 插second到pre后
    second.next = first
    pre.next = second

    // 以上已经完成交换， pre需要指向已完成交换的尾部
    pre = first
  }

  return dummy.next
}