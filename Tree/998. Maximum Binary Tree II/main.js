// Time and space complexity  O (n)

var insertIntoMaxTree = function(root, val) {
  if (root === null) {
      return new TreeNode(val);
  }
  
  if (val > root.val) {
      return new TreeNode(val, root);
  }
  
  
  root.right = insertIntoMaxTree(root.right, val);
  
  return root;
};

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}
