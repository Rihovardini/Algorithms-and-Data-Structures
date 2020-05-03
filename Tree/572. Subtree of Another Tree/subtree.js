// Time Complexity O (m * n)
// Space Complexity O ()

var isSubtree = function (s, t) {
  if (s === null) return false;

  return checkEqualSubTree(s, t) || isSubtree(s.left, t) || isSubtree(s.right, t)
};

function checkEqualSubTree(node1, node2) {
  if (node1 === null && node2 === null) return true;

  if (!node1 || !node2) return false;

  if (node1.val !== node2.val) return false;

  return node1.val === node2.val && checkEqualSubTree(node1.left, node2.left) && checkEqualSubTree(node1.right, node2.right);
}