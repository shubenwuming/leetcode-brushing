/**
 * 题号：226
 * leetcode地址：https://leetcode-cn.com/problems/invert-binary-tree/
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
 * @return {TreeNode}
 */

// 递归， 先翻转，再交换位置
const invertTree = function (root) {
  // 递归结束条件
  if(root === null) return null

  // 翻转左、右子树
  const left = invertTree(root.left)
  const right = invertTree(root.right)

  // 交换当前节点左、右子节点位置
  root.left = right
  root.right = left

  return root
}

// 递归， 先交换位置，再翻转
const invertTree = function (root) {
  // 递归结束条件
  if(root === null) return null

  // 交换当前节点的左、右子节点
  const temp = root.left
  root.left = root.right
  root.right = temp

  // 翻转左、右子树
  invertTree(root.left)
  invertTree(root.right)

  return root
}

