// Time and Space Complexity  - O(n)

// Iterative solution using queue;
var maxDepth1 = function(root) {
  if (root === null) return 0;
  
  if (root.children.length === 0) return 1;
  
  let depth = 0;
  
  const queue = [root];
  
  while(queue.length) {
      const { length } = queue;

      for (let i = 0; i < length; i++) {
          const node = queue.shift();
          
          for (const child of node.children) {
              queue.push(child);
          }
      }
      depth++;
  }
  
  return depth;
};

// Recursive solution
var maxDepth2 = function(root) {
  if (root === null) return 0;
  
  if (root.children.length === 0) return 1;
  
  let max = 0;
  
  for(const child of root.children) {
      max = Math.max(maxDepth(child), max);
  }
} 
