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
var maxDepth = function (root) {
  if (!root) return 0;
  let max = 0;
  let traversal = (curr, level) => {
    if (!curr) return;
    max = Math.max(max, level);
    traversal(curr.left, level + 1);
    traversal(curr.right, level + 1);
  };
  traversal(root, 1);
  return max;
};
