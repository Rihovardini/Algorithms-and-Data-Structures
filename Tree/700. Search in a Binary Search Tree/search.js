// Time complexity - O (n);
// Space complexity - O (1)

var searchBST = function(root, val) {
  while (root !== null && root.val !== val) {
      const isLess = root.val > val;
      root = isLess ? root.left : root.right;
  }
  
  return root;
}