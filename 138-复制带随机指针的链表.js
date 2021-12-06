/**
 * 题号：138
 * 题目地址：https://leetcode-cn.com/problems/copy-list-with-random-pointer/
 * 简要描述：
 * 给你一个长度为 n 的链表，每个节点包含一个额外增加的随机指针 random ，该指针可以指向链表中的任何节点或空节点。

   构造这个链表的 深拷贝。 深拷贝应该正好由 n 个 全新 节点组成，其中每个新节点的值都设为其对应的原节点的值。新节点的 next 指针和 random 指针也都应指向复制链表中的新节点，并使原链表和复制链表中的这些指针能够表示相同的链表状态。复制链表中的指针都不应指向原链表中的节点 。

  例如，如果原链表中有 X 和 Y 两个节点，其中 X.random --> Y 。那么在复制链表中对应的两个节点 x 和 y ，同样有 x.random --> y 。

  返回复制链表的头节点。

  用一个由 n 个节点组成的链表来表示输入/输出中的链表。每个节点用一个 [val, random_index] 表示：

  val：一个表示 Node.val 的整数。
  random_index：随机指针指向的节点索引（范围从 0 到 n-1）；如果不指向任何节点，则为  null 。
  你的代码 只 接受原链表的头节点 head 作为传入参数。
 */

/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */

/**
 * 思路：
 * 复制每个节点，将复制的节点放到被复制的节点前面
 * 需要修正random指针，原因是复制节点的random指向被复制品
 * 当然也需要修正next指针。拆分复制的链表和被复制链表的同时，就已经修正了next指针了
 */

const copyRandomList = function(head) {
  // 空链表不需要复制
  if(head === null) return null

  // cur指针用于遍历，再设一个指针copy用来存复制节点
  let cur = head, copy

  // 遍历原链表 复制每个节点，将复制的节点放到被复制节点的后面
  while (cur) {
    // 复制
    copy = new Node(cur.val, cur.next, cur.random)
    // 连接
    cur.next = copy
    // 处理下个待复制节点
    cur = copy.next
  }

  // 复制后将cur指针指向第一个复制节点
  cur = head.next
  // 修正复制节点的random指针
  while (cur) {
    // 注意复制节点的random指针可能指向null,其指向null时不需要修正了
    if(cur.random) {
      // 复制random指向不为null时，修正。
      cur.random = cur.random.next
    }
    // 处理下个复制节点
    cur = cur.next ? cur.next.next : cur.next
  }

  // cur指向第一个复制节点，开始拆分遍历
  copy = cur = head.next
  // 拆分复制链表和被复制链表，拆分的同时就修正了复制链表的next指向
  while (cur.next) {
    // 被复制指向被复制
    head.next = head.next.next
    // 复制指向复制
    cur.next = cur.next.next

    // 复制和被复制尾节点后移
    head = head.next
    cur = cur.next
  }

  // 注意上面循环结束后，复制链表尾节点还连着被复制链表的尾节点，需要断开
  head.next = null

  return copy
}