 // Time complexity - O (n + m)
 // Space complexity - O (m)
 
var sumEvenAfterQueries = function(A, queries) {
  const res = [];
  let sum = 0; // 2
  
  for (const num of A) {
     if (num % 2 === 0) 
          sum += num;
  }
  
  for (const [val, index] of queries) {
      if (A[index] % 2 == 0) {
          sum -= A[index];
      }
      
      A[index] += val;
      
      if (A[index] % 2 == 0) {
          sum += A[index];
      }
      
      res.push(sum)
  }
  
  return res;
};