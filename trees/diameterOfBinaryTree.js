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
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  let maxDepth = 0;
  let traversal = (curr) => {
    if (!curr) return 0;
    let depth = 0;
    let leftDepth = traversal(curr.left);
    let rightDepth = traversal(curr.right);
    depth = 1 + Math.max(leftDepth, rightDepth);
    maxDepth = Math.max(maxDepth, leftDepth + rightDepth);
    return depth;
  };
  traversal(root);
  return maxDepth;
};
