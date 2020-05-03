// Time and Space Complexity  - O(n)

var diameterOfBinaryTree = function(node) {
  let diameter = 0;
  
  if (node === null) return diameter;
  
  const getHeight = (node) => {
      if (node === null) return 0;
      
      const left = getHeight(node.left);
      const right = getHeight(node.right);
      
      diameter = Math.max(left + right, diameter);
      
      return Math.max(left, right) + 1;
  }
  
  getHeight(node);
  
  return diameter;
};