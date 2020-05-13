 // Time complexity and Space complexity - O (n)

 /* 
  In this example, im using BFS to traverse tree and 2 counters for level control.
  currLevel - is responsible for number of nodes in the current level.
  nextLevel - is counting number of nodes for next level.
  if currlevel is equal to 0 than we assign nextLevel as a currLevel
 */

 var levelOrder = function(root) {
  if (root === null) return [];
  
  const queue = [root];
  const result = [];
  let levelArr = [];
  
  let currLevel = 1;
  let nextLevel = 0;
  
  while(queue.length) {
      const node = queue.shift()
      levelArr.push(node.val);
      
      if (node.left) {
          nextLevel++;
          queue.push(node.left);
      }
      
      if (node.right) {
          nextLevel++;
          queue.push(node.right);
      }
      
      currLevel--;
      
      if (currLevel === 0) {
          result.push(levelArr);
          levelArr = [];
          currLevel = nextLevel;
          nextLevel = 0;
      }
  }
  
  return result;
}; 