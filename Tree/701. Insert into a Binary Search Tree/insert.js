// Time and Space Complexity  - O(n)

var insertIntoBST = function(root, val) {
  if (root === null) return TreeNode(val);
  
  let node = root;
  let prevNode = null; 
  
  while (node !== null) {
      prevNode = node;
      node = node.val > val ? node.left : node.right;
      
      if (node === null && prevNode.val > val) {
          prevNode.left = new TreeNode(val);
      }
      
      if (node === null && prevNode.val < val) {
          prevNode.right = new TreeNode(val);
      }
  }
  
  return root;
};

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
 }
