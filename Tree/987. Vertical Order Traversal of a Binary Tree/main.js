// Time complexity O (n log n)
// Space complexity O (n)

const traverse = (node, x, y, hash) => {
  if (!hash.hasOwnProperty(y)) {
      hash[y] = {};
  }

  if (!hash[y].hasOwnProperty(x)) {
      hash[y][x] = [node.val];
  } else {
      hash[y][x].push(node.val);
  }

  node.left && traverse(node.left, x - 1 , y + 1, hash);
  node.right && traverse(node.right, x + 1 , y + 1, hash)
}

var verticalTraversal = function(root) {
  const hash = {};
  const arr = [];
  
  traverse(root, 0, 0, hash);
  const keys = Object.keys(hash);
  const verticalHash = {};
      
  for (const levelKey in hash) {
      for(const verticalKey in hash[levelKey]) {
          const arr = hash[levelKey][verticalKey].sort((a, b) => a - b);
          
          if (verticalHash.hasOwnProperty(verticalKey)) {
              verticalHash[verticalKey].push(...arr);
          } else {
              verticalHash[verticalKey] = arr;
          }
      }
  }
  
  const verticalKeys = Object.keys(verticalHash).sort((a,b) => a-b);
  
  return verticalKeys.map(key => verticalHash[key]);
};