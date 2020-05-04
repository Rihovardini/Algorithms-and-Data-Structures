// Time and Space Complexity  - O(n)

var deepestLeavesSum = function(root) {    
  let hash = {};
  let maxDepth = 0;
  
  const traverse = (root, counter = 0) => {
      counter++;
      
      if (root.left === null && root.right === null && counter >= maxDepth) {
          maxDepth = counter;
          if (hash.hasOwnProperty(counter)) {
              hash[counter] += root.val;
          } else {
              hash = {};
              hash[counter] = root.val;   
          }
      }
      
      root.left && traverse(root.left, counter);
      root.right && traverse(root.right, counter);
  }
  
  traverse(root);
  
  return hash[maxDepth];
};