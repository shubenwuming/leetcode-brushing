/**
 * 题号：107
 * 题目地址：https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii/
 * 解题方法：递归
 * 递归函数的意义：层序遍历以root为根节点的二叉树
 * 递归结束条件：root为空
 * 递归过程：层序遍历root的左子树、层序遍历root的右子树
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
  // 结果数组
  const res = [];
  // 递归函数
 
  __levelOrderBottom(root, 0, res);

  // 翻转数组
  reverseArr(res);

  // 返回结果数组
  return res;
};

/**
 * @params root 节点
 * @params level 二维数组中外层数组下标
 * @params res 结果数组
 */
function __levelOrderBottom (root, level, res) {
  // 递归结束条件
  if(root === null) return;

  // 将节点的值放到结果数组中（二维数组，外层对应数的层数、内层放树每层节点的val）
  if(res.length === level) res.push([]);
  res[level].push(root.val);

  // 递归层序遍历左子树
  __levelOrderBottom(root.left, level + 1, res);
  // 递归层序遍历右子树
  __levelOrderBottom(root.right, level + 1, res);

}

/**
 * @params arr 待翻转数组
 */
function reverseArr(arr) {
  let i = 0, j = arr.length - 1;
  while(i < j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    ++i, --j;
  }
}