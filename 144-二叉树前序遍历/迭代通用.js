/**
 * 题号：144
 * 题目地址：https://leetcode-cn.com/problems/binary-tree-preorder-traversal/
 */

/**
 * 标记法，访问过的标记为true, 未访问过的标记为false
 * 当栈弹出的是访问过的节点，输出到结果集
 * 当栈弹出的是未访问过的节点，右子树、左子树、本身进行依次压栈（压栈顺序和前序遍历顺序相反），此次压栈注意要改变本身的状态，因为本身已经变成已访问节点了
 */

const preorderTraversal = function (root) {
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
      // 如果是未访问的节点，按照与前序遍历的相反方向压栈（右、左、根）
      // 右，未访问
      node.right && stack.push({node: node.right, isSearched: false})
      // 左，未访问
      node.left && stack.push({node: node.left, isSearched: false})
      // 根，已访问
      stack.push({node: node, isSearched: true})
    }

  }

  return res
}

