/**
 * 题号：102
 * 题目地址：https://leetcode-cn.com/problems/binary-tree-level-order-traversal/
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

/**
 * BFS 指 广度优先搜索
 * 维护一个队列（存每层的节点）
 */

const levelOrder = function (root) {
  // 结构数组
  const res = [];
  
  // 空树,直接返回
  if(root === null) return res;

  // ********************* 代码到了这里说明是非空树 ***************************

  // 队列维护树的每层节点
  const queue = [];
  // 将根节点和他所对应的层数入队列
  queue.push({node: root, level: 0});

  // 循环队列
  while(queue.length) {
    // 出队
    const {node, level} = queue.shift();

    // 将出队的节点的值存到res中
    if(res.length === level) res.push([]);
    res[level].push(node.val);
    
    // 若当前节点有左子树,将其入队
    if(node.left) queue.push({node: node.left, level: level + 1});
    // 若当前节点有右子树,将其入队
    if(node.right) queue.push({node: node.right, level: level + 1});
  }

  // 返回结果数组
  return res;
}