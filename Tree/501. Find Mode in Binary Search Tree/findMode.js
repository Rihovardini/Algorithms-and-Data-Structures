// Time and Space Complexity  - O(n)

var findMode = function(root) {
  const mode = [];

  if(!root) return mode;
  
  const hash = {};
  let max = 0
  helper(root, hash);
  
  for (const key in hash) {
      if(max === hash[key]) {
          mode.push(key);
      }
      
      if (hash[key]> max) {
          mode.length = 0;
          mode.push(key);
          max = hash[key];
      }
  }
  
  return mode;
};

function helper(node, hash) {
  const hasNum = hash.hasOwnProperty(node.val); 
  
  if (hasNum) {
      hash[node.val] += 1;
  } else {
      hash[node.val] = 1;
  }
  
  node.left && helper(node.left, hash);
  node.right && helper(node.right, hash);
}