/**
 * 题号：86
 * leetcode地址：https://leetcode-cn.com/problems/partition-list/
 * 题目描述：
 * 给你一个链表的头节点 head 和一个特定值 x ，请你对链表进行分隔，使得所有 小于 x 的节点都出现在 大于或等于 x 的节点之前。
 * 你应当 保留 两个分区中每个节点的初始相对位置。
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
 * @param {number} x
 * @return {ListNode}
 */


/**
 * 思路：
 * 遍历
 * 拆成两个链表，链表一的所有节点值小于x , 链表二的所有节点值大于等于x
 * 再连接这两个链表，链表一的尾接链表二的头, 连接的时候可能成环，需要额外处理一种情况（链表二的尾，连接了链表一中的某个节点）
 * 返回链表一的头
 */
const partition = function(head, x) {
  // small链表的节点值 都 小于x， smallHead 是其虚头
  let small = new ListNode(-1), smallHead = small
  // large链表的节点值 都 大于等于 x， largeHead 是其虚头
  let large = new ListNode(-1), largeHead = large

  // 遍历原链表，分隔成两个链表
  while(head) {
    if(head.val < x) {
      // 小于x的节点 放到 small 链表尾， small链表尾指针 往后移动一位
      small.next = head
      small = small.next
    } else {
      // 大于等于x的节点 放到 large 链表尾， large链表尾指针 往后移动一位
      large.next = head
      large = large.next
    }

    // 开始原链表下次循环
    head = head.next
  }

  // 可能成环的处理
  large.next = null

  // small链表 拼接 large链表（注意：samll尾 拼 large真实头）
  small.next = largeHead.next

  // 返回small真实头
  return smallHead.next
};