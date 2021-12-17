/**
 * 题号：145
 * 题目地址：https://leetcode-cn.com/problems/binary-tree-postorder-traversal/
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
const postorderTraversal = function(root) {
  // 结果集
  const res = []

  // 递归函数，参数是节点，这里用到了闭包---res
  const inorder = function(node) {
    // 递归结束条件
    if(node === null) return

    // 单层递归的逻辑，左子树处理、右子树处理、输出根节点值
    node.left && inorder(node.left)
    node.right && inorder(node.right)
    res.push(node.val)
  }

  inorder(root)

  return res
 }