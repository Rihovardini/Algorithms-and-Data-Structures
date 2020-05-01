// Time and Space Complexity  - O(n)

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
 }

var sortedArrayToBST = function(nums) {
 if(nums.length === 0) return null;
  
 return helper(nums, 0, nums.length - 1);
};

function helper(arr, start , end) {
  if (end < start) return null;
  
  const mid = Math.floor((end + start)/2);
  
  const root = new TreeNode(arr[mid]);
  
  root.left = helper(arr, start, mid - 1);
  root.right = helper(arr, mid + 1, end);
  
  return root;
}