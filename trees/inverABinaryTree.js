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
var invertTree = function (root) {
  if (!root) return root;
  let inversion = (curr) => {
    if (!curr) return;
    let temp = curr;
    curr.left = curr.right;
    curr.right = temp;
    inversion(curr.left);
    inversion(curr.right);
  };
  inversion(root);
  return root;
};
