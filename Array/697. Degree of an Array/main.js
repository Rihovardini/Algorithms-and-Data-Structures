 // Time complexity - O (n)
 // Space complexity - O (n)

 var findShortestSubArray = function(nums) {
  const hash = {};
  
  for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      
      if (hash[num]) {
          hash[num].push(i);
      } else {
          hash[num] = [i];
      }
  }
  
  let maxArr = hash[nums[0]];
  let diff = maxArr[maxArr.length - 1] - maxArr[0];
  
  for (const key in hash) {
       const arr = hash[key];
       const localDiff = arr[arr.length - 1] - arr[0];
    
       if (arr.length === maxArr.length && localDiff < diff) {
           diff = localDiff;
           maxArr = arr;
       }
      
       if (arr.length > maxArr.length) {
           diff = localDiff;
           maxArr = arr;
       }
  } 
  
  return diff + 1;
};