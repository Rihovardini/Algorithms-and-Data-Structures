// Time and space complexity O(n)

var isSymmetric = function(root) {
  return isEqual(root, root);
};

function isEqual(node1, node2) {
  if (!node1 && !node2) return true;
  
  if (!node1 || !node2) return false;
  
  return (node1.val === node2.val)
  && isEqual(node1.left, node2.right)
  && isEqual(node1.right, node2.left)
}