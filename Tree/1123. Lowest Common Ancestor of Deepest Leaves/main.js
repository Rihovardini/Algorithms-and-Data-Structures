// Time and Space complexity - O (n);

// 1. Find every time max depth to the deepest leaf of subtree
// 2. if depth of left and right subtrees are equal with maxDepth than its the ancestor of the deepest leaf. 

var lcaDeepestLeaves = function(root) {
  let ancestor = null;
  let maxDepth = 0;
  
  const traverse = (node, count = 1) => {
     maxDepth = Math.max(maxDepth, count);
      
      if (node === null) return count;
      
      const left = traverse(node.left, count + 1);
      const right = traverse(node.right, count + 1);
      
      if (left === maxDepth && right === maxDepth) {
          ancestor = node;
      }
              
      return Math.max(left, right);
  }
  
  traverse(root);
  
  return ancestor;
};