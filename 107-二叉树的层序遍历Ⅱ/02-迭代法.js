/**
 * 题号：107
 * 题目地址：https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii/
 * 解题方法：迭代 + 队列
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
const levelOrderBottom = function(root) {
  //  结果数组
  const res = [];

  // 如果是空树，返回res
  if(root === null) return res;

  // ********************* 代码到了这里说明树不是空树 ***************************

  // 队列（存树每层的节点）
  const queue = []
  // 初始化树，树第一层节点入队
  queue.push({node: root, level: 0});
  
  // 当前节点出队、当前节点的孩子节点入队
  while(queue.length) {
    // 出队
    const {node, level} = queue.shift();
    // 讲出队节点的val放到结果数组中
    if(res.length === level) res.push([]);
    res[level].push(node.val);

    // 出队节点的孩子节点入队
    if(node.left) queue.push({node: node.left, level: level + 1});
    if(node.right) queue.push({node: node.right, level: level + 1});
  }

  // 翻转结果数组
  reverseArr(res);

  // 返回结果数组
  return res;
}


function reverseArr(arr) {
   for(let i = 0, j = arr.length - 1; i < j; ++i, --j) {
     const temp = arr[i];
     arr[i] = arr[j];
     arr[j] = temp;
   }
 }