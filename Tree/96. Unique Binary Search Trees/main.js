// Time complexity  - O (n^2)
// Space complexity - O (n)

/*
For all possible values of i, consider i as root, 
then [1….i-1] numbers will fall in the left subtree and [i+1….n] numbers will fall in the right subtree.
So, add (i-1)*(n-i) to the answer. The summation of the products will be the answer to the number of unique BST.
*/

var numTrees = function(n, hash = { 0: 1, 1: 1 }) {
  if (hash.hasOwnProperty(n)) return hash[n];
  
  let sum = 0;
  
  for (let i = 1; i <= n; i++) {
      
      sum += numTrees(i - 1, hash) * numTrees(n - i, hash);
  }
  
  hash[n] = sum;
  return sum;
};
