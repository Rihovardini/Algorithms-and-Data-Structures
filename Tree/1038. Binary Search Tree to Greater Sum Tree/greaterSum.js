// Time and Space Complexity O(n)

var bstToGst = function(root) {
  let sum = 0;
  const getSumTree = node => {
     if(node.right) {
         getSumTree(node.right);
     }
     
     sum += node.val;
     node.val = sum;
     
     if (node.left) {
         getSumTree(node.left);
     }
  }
  
  getSumTree(root);
  
  return root;
 };