// Time and Space complexity - O(n);

var isBalanced = function(root) {
  if (root === null) return true;
  
  return helper(root) !== -1;
};

function helper(node) {
  if (node === null) return 0;
  
  const left = helper(node.left);
  const right = helper(node.right);
  const hasBalance = Math.abs(left - right) < 2;
  
  if (!hasBalance || left === -1 || right === -1) return -1;
  
  return Math.max(left, right) + 1;
}

// Time Complexity - O(n^2)
// Space Complexity - O(n)

// Calculate depth for every node and than checking balance.

var isBalanced = function(root) {
  if (root === null) return true;
  
  const hasBalance = Math.abs(helper(root.left) - helper(root.right)) < 2;
  
  return hasBalance && isBalanced(root.left) && isBalanced(root.right);
};

function helper(node) {
  if (node === null) return 0;
  
  return Math.max(helper(node.left) + 1, helper(node.right) + 1);
}