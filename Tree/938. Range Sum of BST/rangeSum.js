// Time and Space Complexity  - O(n)

var rangeSumBST = function(root, L, R) {
  let sum = 0;
  
  const traversal = node => {
      node.left && traversal(node.left);
      
      if (node.val >= L && node.val <= R) {
          sum += node.val;
      }
      
      node.right && traversal(node.right);
  }
  
  root && traversal(root);
  
  return sum;
};