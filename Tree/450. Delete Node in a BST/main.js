// Time and space complexity - O (n)

/*
  Node deletion in BST

  Here we have 3 cases: 
    1. if node is a leaf than we just deleteing the node 
    2. if node have both chidren than we go to right child, taking leaf value of this subtree and setting instead of deleting value.
       Then we have to call deleteNode(root.right,  root.val) func to delete node in the right subTree with value we have just set.
    3. if left or right subtree than we replacing adcenter with on of the child.   
*/

var deleteNode = function(root, key) {
  if (root === null) return null;
  
  const isEqual = root.val === key;
  
  if (isEqual && !root.left && !root.right) {
      return null;
  }
  
  if (isEqual && root.left && root.right) {
      root.val = getClosestValue(root.right);
      root.right = deleteNode(root.right, root.val);
      return root;
  }
  
  if (isEqual && root.left) {
      return root.left;
  }
  
  if (isEqual && root.right) {
      return root.right;
  }
  
  if (root.val > key) {
      root.left = deleteNode(root.left, key);
  }
  
  if (root.val < key) {
      root.right = deleteNode(root.right, key);
  }
  
  return root;
};


function getClosestValue(node) {
  while (node.left !== null) {
      node = node.left;
  }
  
  return node.val;
}