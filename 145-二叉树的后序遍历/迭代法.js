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
  const res = []
  if(root === null) return res

  // 栈, 初始化，从根节点压栈，此时根节点未被访问，标记为false
  const stack = [{
    node: root, isSearched: false
  }]
  
  while (stack.length) {
    // 出栈
    const {node, isSearched} = stack.pop()

    if(isSearched) {
      // 如果是访问过的节点，输出到结果集
      res.push(node.val)
    } else {
      // 如果是未访问的节点，按照与前序遍历的相反方向压栈（根、右、左）
      // 根，已访问
      stack.push({node: node, isSearched: true})
      // 右，未访问
      node.right && stack.push({node: node.right, isSearched: false})
      // 左，未访问
      node.left && stack.push({node: node.left, isSearched: false})
    }

  }

  return res
}