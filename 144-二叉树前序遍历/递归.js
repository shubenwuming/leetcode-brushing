/**
 * 题号：144
 * 题目地址：https://leetcode-cn.com/problems/binary-tree-preorder-traversal/
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
 * @return {number[]}
 */

// 递归
const preorder = function (res, root) {
  // 节点为空, 递归结束
  if(root === null) return

  // 节点不为空，将节点值添加到res
  res.push(root.val)

  // 处理左
  preorder(res, root.left)

  // 处理右
  preorder(res, root.right)

  
}

const preorderTraversal = function (root) {
  // res用来存储遍历结果
  const res = []
  // 前序遍历过程
  preorder(res, root)
  // 返回结果
  return res
}