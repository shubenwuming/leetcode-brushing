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

//迭代
const preorderTraversal = function (root) {
  // 如果根节点为空，返回
  if(root === null) return [];

  const res = []

  // 模拟栈
  const stack = [root]

  while(stack.length > 0) {
    // 根节点出栈
    const cur = stack.pop()
    // 添加根节点到res
    res.push(cur.val)
    // 右子树不为空，则压栈
    cur.right && stack.push(cur.right)
    // 左子树不为空，则压栈
    cur.left && stack.push(cur.left)

  }

  return res
}