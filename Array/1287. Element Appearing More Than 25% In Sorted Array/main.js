 // Time complexity - O (n)
 // Space complexity - O (1)

var findSpecialInteger = function(arr) {
  const occurs = arr.length / 4;
  const hash = {};
  let count = 0;
  let savedNum = arr[0];
  
  for (const num of arr) {
      if (num === savedNum) {
          count++;
      } else {
          count = 1;
          savedNum = num;
      }
      
      if (count > occurs) return num;
  }
};