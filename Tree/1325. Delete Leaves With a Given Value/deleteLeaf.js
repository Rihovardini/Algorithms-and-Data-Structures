// Time and Space Complexity  - O(n)

var removeLeafNodes = function(root, target) {
  if (root === null) return null;
  
  root.left = removeLeafNodes(root.left, target);
  root.right = removeLeafNodes(root.right, target);
  
  const isEqual = root.val === target;
  const isLeaf = root.left === null && root.right === null;
  
  if (isEqual && isLeaf) return null;
  
  return root;
};