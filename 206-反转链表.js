 /**
  * 题号：206
  * 题目地址：https://leetcode-cn.com/problems/reverse-linked-list/
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


// 解法一、迭代法(依次改变每个指针指向)

let reverseList = function (head) {
  // 边界处理 ---  如果链表为空，或者链表只有一个节点，则不需要反转，直接返回即可
  if(head === null || head.next === null) return head;

  // 存储反转后的头节点
  let newHead = null;
  // 当前 待改变指向 节点
  let cur = head;

  while(cur) {
    // 用来保存当前节点的下一个节点，目的保证后续节点不丢失
    const curNext = cur.next;
    // 改变当前节点的指向， 指向反转后的头节点
    cur.next = newHead;
    // 反转后的头节点已经变成cur了
    newHead = cur;
    // 处理后当前节点，现在要处理后面一个节点了
    cur = curNext;
  }

  // 整个循环结束，返回反转后的头节点
  return newHead;
}


// 解法二、递归法 (明确递推公式做了什么)；

let reverseList = function (head) {
  // 递归结束条件是到了尾节点
  if(head === null || head.next === null) return head;
  // 递推公式 - 将拿到的节点反转，并返回新的头节点；
  let newHead = reverseList(head.next);
  // 这行代码实际是改变反转后的链表尾节点的指向，指向当前的head
  head.next.next = head;
  // 当前 head 指向 null，
  head.next = null;

  return newHead;
}

// 解法三、栈
let reverseList = function (head) {
  const vitualHead = new ListNode(-1)
  let p = vitualHead

  const stack = []

  while(head !== null) {
    stack.push(head)
    head = head.next
  }

  while(stack.length > 0) {
    const node = stack.pop()
    p.next = node
    node.next = null
    p = p.next
  }

  return vitualHead.next
}

