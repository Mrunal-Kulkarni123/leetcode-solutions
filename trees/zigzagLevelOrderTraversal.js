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
var zigzagLevelOrder = function (root) {
  let ans = [];
  let traversal = (curr, level) => {
    if (!curr) return;
    if (!ans[level]) {
      ans[level] = [];
    }
    if (level % 2 == 0) {
      ans[level].push(curr.val);
    } else {
      ans[level].unshift(curr.val);
    }
    traversal(curr.left, level + 1);
    traversal(curr.right, level + 1);
  };
  traversal(root, 0);
  return ans;
};
