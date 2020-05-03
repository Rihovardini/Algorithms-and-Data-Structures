// Time and Space Complexity - O(n)

var findTilt = function(root) {
  let titl = 0;
  const traverse = node => {
      if(node === null) return 0;
      
      const left = traverse(node.left);
      const right = traverse(node.right);
      titl += Math.abs(left - right);
      
      return left + right + node.val;
  };
  
  traverse(root);
  return titl;
};
