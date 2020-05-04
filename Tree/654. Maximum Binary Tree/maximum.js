// Time complexity - O(n^2)
// Space complexity - O(n);

var constructMaximumBinaryTree = function(nums) {
  return constructTree(nums, 0, nums.length - 1);
};

function constructTree(nums, start, end) {
  if (start > end) return null;
      
  const index = getMaxElementIndex(nums, start, end);
  
  const left = constructTree(nums, start, index - 1);
  const right = constructTree(nums, index + 1, end);
  
  return new TreeNode(nums[index], left, right);
}

function getMaxElementIndex(nums, start, end) {
  let index = start, max = nums[start];
  
  for (let i = start; i <= end; i++) {
      if(nums[i] > max) {
          index = i;
          max = nums[i] 
      }
  }
  
  return index;
}

function TreeNode(val, left, right) {
   this.val = (val===undefined ? 0 : val)
   this.left = (left===undefined ? null : left)
   this.right = (right===undefined ? null : right)
}