// Time and Space Complexity  - O(n)

var hasPathSum = function(root, sum) {    
  const checkSumEqual = (node, prevSum) => {
      if (node === null) return false;
      
      const localSum = node.val + prevSum;

      if (node.left === null && node.right === null) {
          return localSum === sum;
      }

      return checkSumEqual(node.left, localSum) || checkSumEqual(node.right, localSum); 
  }
  
  return checkSumEqual(root, 0);
};