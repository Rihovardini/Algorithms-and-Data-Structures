// Time and Space Complexity  - O(n)

var longestUnivaluePath = function(root) { 
  let maxPath = 0;
  
  const traverse = (root, prevVal) => {
     if (root === null) return 0;
     
     const left = traverse(root.left, root.val);
     const right = traverse(root.right, root.val);
 
     maxPath = Math.max(left + right, maxPath);
 
     if(root.val == prevVal) return Math.max(left, right) + 1; 
      
     return 0; 
  }   
     
  traverse(root);
     
  return maxPath;   
 };