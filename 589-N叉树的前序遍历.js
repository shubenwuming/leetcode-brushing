/**
 * 题号：589
 * 题目地址：https://leetcode-cn.com/problems/n-ary-tree-preorder-traversal/
 */

/**
 * 思路：
 * 将用递归法来解
 * 递归函数的意义：前序遍历以root为根节点的N叉树
 * 边界条件：根节点为空时不需要遍历
 * 递归过程：前序遍历root的子树
 */

/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */

const preorder = function (root) {
  // 结果数组
  const res = [];

  // 递归函数
  const __preorder = function (root, res) {
    if(root === null) return;
    
    res.push(root.val);

    // 递归处理子树
    for(let i = 0; i < root.children.length; ++i) {
      __preorder(root.children[i], res);
    }
  }

  __preorder(root, res);

  return res;
}