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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  let ans = false;
  if (!root) return false;
  let traversal = (curr, currSum) => {
    let sum = curr.val + currSum;
    if (!curr.left && !curr.right) {
      if (sum == targetSum) {
        ans = ans || true;
      }
    }
    curr.left && traversal(curr.left, sum);
    curr.right && traversal(curr.right, sum);
  };
  traversal(root, 0);
  return ans;
};
