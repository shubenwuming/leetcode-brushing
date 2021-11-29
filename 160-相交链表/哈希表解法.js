/**
 * 题号：160
 * leetcode地址：https://leetcode-cn.com/problems/intersection-of-two-linked-lists/
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

// 哈希表解法
const getIntersectionNode = function(headA, headB) {
  // 用来存其中一个链表所有节点
  let set = new Set()
  // 用于节点后移
  let temp = headA
  // 第一个遍历存
  while(temp !== null) {
    set.add(temp)
    temp = temp.next
  }
  
  temp = headB
  // 第二个遍历，哈希表是否已经存在节点
  while(temp !== null) {
    // 存在则返回该节点，此节点即为相交节点
    if(set.has(temp)) {
      return temp
    } 
    temp = temp.next
  }
  // 遍历完，说明不存在相交
  return null
};