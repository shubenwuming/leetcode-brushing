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
 * 递归法：
 * 递归函数的意义：层序遍历以root为根节点的二叉树
 * 结束条件：root为空
 * 递归过程：层序遍历root的左子树、层序遍历root的右子树
 */

 const levelOrder = function (root) {
  //  层序遍历的结果数组
  const res = [];
  // 递归函数
  const __levelOrder = function (root, level, res) {
    // 递归结束条件
    if(root === null) return;
    
    // 把每层节点的值放入结果数组中（层数对应数组下标）
    if(res.length === level) res.push([]);
    res[level].push(root.val);

    // 层序遍历左子树
    __levelOrder(root.left, level + 1, res);
    // 层序遍历右子树
    __levelOrder(root.right, level + 1, res);
  }
  
  __levelOrder(root, 0, res);

  // 返回结果数组
  return res;
}