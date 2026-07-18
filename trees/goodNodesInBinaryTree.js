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
var goodNodes = function (root) {
  let ans = 0;
  let traversal = (curr, maxSeenSoFar) => {
    if (!curr) return;
    if (curr.val >= maxSeenSoFar) {
      ans++;
    }
    maxSeenSoFar = Math.max(maxSeenSoFar, curr.val);
    traversal(curr.left, maxSeenSoFar);
    traversal(curr.right, maxSeenSoFar);
  };
  traversal(root, root.val);
  return ans;
};
