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
